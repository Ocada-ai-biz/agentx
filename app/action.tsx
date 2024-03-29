import 'server-only';

import { createAI, createStreamableUI, getMutableAIState } from 'ai/rsc';
import OpenAI from 'openai';

import {
  spinner,
  BotCard,
  BotMessage,
  SystemMessage,
  Stock,
  Purchase,
  Stocks,
  Events,
} from '@/components/llm-stocks';

import {
  runAsyncFnWithoutBlocking,
  sleep,
  formatNumber,
  runOpenAICompletion,
} from '@/lib/utils';
import { z } from 'zod';
import { StockSkeleton } from '@/components/llm-stocks/stock-skeleton';
import { EventsSkeleton } from '@/components/llm-stocks/events-skeleton';
import { StocksSkeleton, StocksSkeleton2} from '@/components/llm-stocks/stocks-skeleton';

import { solanaContent, solanaAddressList } from '@/utils/constants';

import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { OpenAIEmbeddings, ChatOpenAI } from '@langchain/openai'


import { cryptoPrice, trendingCrypto } from "@/utils/cryptoUtils";
import { insertRoomHistory } from '@/app/supabase';
import searchTavily from '@/utils/search';


const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
});

async function confirmPurchase(symbol: string, price: number, amount: number) {
  'use server';

  const aiState = getMutableAIState<typeof AI>();

  const purchasing = createStreamableUI(
    <div className="inline-flex items-start gap-1 md:items-center">
      {spinner}
      <p className="mb-2">
        Purchasing {amount} ${symbol}...
      </p>
    </div>,
  );

  const systemMessage = createStreamableUI(null);

  runAsyncFnWithoutBlocking(async () => {
    
    await sleep(1000);

    purchasing.update(
      <div className="inline-flex items-start gap-1 md:items-center">
        {spinner}
        <p className="mb-2">
          Purchasing {amount} ${symbol}... working on it...
        </p>
      </div>,
    );

    await sleep(1000);

    purchasing.done(
      <div>
        <p className="mb-2">
          You have successfully purchased {amount} ${symbol}. Total cost:{' '}
          {formatNumber(amount * price)}
        </p>
      </div>,
    );

    systemMessage.done(
      <SystemMessage>
        You have purchased {amount} total tokens of {symbol} at ${price}. Total cost ={' '}
        {formatNumber(amount * price)}.
      </SystemMessage>,
    );

    aiState.done([
      ...aiState.get(),
      {
        role: 'system',
        content: `[User has purchased ${amount} tokens of ${symbol} at ${price}. Total cost = ${
          amount * price
        }]`,
      },
    ]);
  });

  return {
    purchasingUI: purchasing.value,
    newMessage: {
      id: Date.now(),
      display: systemMessage.value,
    },
  };
}

async function submitUserMessage(content: string, titleId: any) {
  'use server';

  const question = content;
  const title_id = titleId;

  const aiState = getMutableAIState<typeof AI>();
  aiState.update([
    ...aiState.get(),
    {
      role: 'user',
      content,
    },
  ]);

  const reply = createStreamableUI(
    <BotMessage className="items-center">{spinner}</BotMessage>,
  );

  const completion = runOpenAICompletion(openai, {
    model: 'gpt-3.5-turbo-0125',
    stream: true,
    messages: [
      {
        role: 'system',
        content: `\
        You are an advanced AI Agent built by the OCADA AI engineering team, you are very experienced with cryptocurrency trading conversation and you can help users buy cryptocurrency, step by step. You also have in-depth knowledge of both ethereum blockchain development and building smart contracts on solana, when users ask for writing contracts, always write it in a very detailed and clear manner. You are also very experienced with smart contract code reviews for security and efficiency issues.
        You and the user can discuss cryptocurrency prices and the user can adjust the amount of tokens they want to buy, or place an order, in the UI.
        
        Messages inside [] means that it's a UI element or a user event. For example:
        - "[Price of AAPL = 100]" means that an interface of the stock price of AAPL is shown to the user.
        - "[User has changed the amount of AAPL to 10]" means that the user has changed the amount of AAPL to 10 in the UI.

        If the user requests purchasing a stock, call \`show_stock_purchase_ui\` to show the purchase UI.
        If the user just wants the price, call \`show_stock_price\` to show the price, if the price returns undefined or nothing or empty value, call \`get_events\` to get the price of the crypto asset.
        If you want to show trending tokens, call \`list_stocks\`.
        If you want to search the internet or just search for queries you don't know about, call \`get_events\`, or if a user asks a controversial question that requires advice or deep insight, call \`get_events\` read the content of the result, and then act as an experienced professional in that field and provide the user with the answer to their question and not only results from the function.
        If you want to show information about a specific solana wallet address or if user asks question about an exchange or the wallet address provided doesn't start with 0x, call \`fetch_solana_detail\`.
        If you want to show price of a specified cryptocurrency, call \`fetch_crypto_price\`.
        If you want to show details about a specific ethereum wallet address, call \`fetch_wallet_details\`.
        If the user wants to sell stock and cryptocurrency, or complete another impossible task, respond that you are a demo and cannot do that yet.

        Besides that, you can also chat with users and do some calculations if needed. Remember to always return results in an appropriately structured format that can easily be read by others. if it's a numbered result, retun the answers in bullet format`,
      },

      ...aiState.get().map((info: any) => ({
        role: info.role,
        content: info.content,
        name: info.name,
      })),
    ],
    functions: [
      {
        name: 'show_stock_price',
        description:
          'Get the current stock price of a given stock or currency. Use this to show the price to the user.',
        parameters: z.object({
          symbol: z
            .string()
            .describe(
              'The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.',
            ),
          name: z.string().describe('The name of the stock.'),
          price: z.number().describe('The price of the stock fetched from coinmarketcap.'),
          delta: z.number().describe('The change in price of the stock'),
        }),
      },
      {
        name: 'show_stock_purchase_ui',
        description:
          'Show price and the UI to purchase a stock or currency. Use this if the user wants to purchase a stock or currency.',
        parameters: z.object({
          symbol: z
            .string()
            .describe(
              'The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.',
            ),
          name: z.string().describe('The name of the stock or currency.'),
          price: z.number().describe('The price of the stock.'),
          numberOfShares: z
            .number()
            .describe(
              'The **number of shares** for a stock or currency to purchase. Can be optional if the user did not specify it.',
            ),
        }),
      },
      {
        name: 'list_stocks',
        description: 'Lists the top trending crypto tokens.',
        parameters: z.object({
          stocks: z.array(
            z.object({
              symbol: z.string().describe('The symbol of the stock'),
              name: z.string().describe('The name of the stock'),
              price: z.number().describe('The price of the stock'),
              delta: z.number().describe('The change in price of the stock'),
            }),
          ),
        }),
      },
      {
        name: 'get_events',
        description:
          'searches the internet to get the latest events.',
        parameters: z.object({
            query: z.string().describe('the result of the internet search' )
        }),
      },
      {
        name: 'fetch_solana_detail',
        description: 'Fetches information about a specific solana wallet address.',
        parameters: z.object({
          address: z.string(),
          description: z.string().describe('The data of the solana wallet address')
        }),
      },
      {
        name: 'fetch_wallet_details',
        description: 'Fetches the the details about a spcific Solana Wallet Address',
        parameters: z.object({
          address: z.string(),
        }),
      },
    ],
    temperature: 0,
  });

  completion.onTextContent(async (content: string, isFinal: boolean) => {
    const answer = content;
    reply.update(<BotMessage>{content}</BotMessage>);
    if (isFinal) {
      const data = {
        title_id: title_id, 
        question: question, 
        answer: answer, 
        type: "text"
      }
      const res = await insertRoomHistory(data);
      
      reply.done();
      aiState.done([...aiState.get(), { role: 'assistant', content }]);
    }
  });

  completion.onFunctionCall('list_stocks', async ({  }) => {
    const trending = await trendingCrypto();
    const updatedStocks = trending;
    reply.update(
      <BotCard>
        <StocksSkeleton2 cryptoList={updatedStocks} />
      </BotCard>,
    );
    

    await sleep(1000);

    const data = {
      title_id: title_id, 
      question: question, 
      answer: updatedStocks, 
      type: "list_stocks"
    }
    const res = await insertRoomHistory(data);

    reply.done(
      <BotCard>

      <Stocks stocks={trending} />
      </BotCard>,
    );

    aiState.done([
      ...aiState.get(),
      {
        role: 'function',
        name: 'list_stocks',
        content: JSON.stringify(updatedStocks),
      },
    ]);
  });

  completion.onFunctionCall('get_events', async ({ query }) => {
    reply.update(
      <BotCard>
        <EventsSkeleton />
      </BotCard>,
    );
    const event = await searchTavily(query);
    console.log("Search results:", event);

    // const currentEvents = await searchTheWeb(events);
    // console.log(`Results for ${events} are ${currentEvents}`);

    await sleep(1000);


    reply.done(
      <BotCard>
        <Events results={event.results ? event.results.map(result => ({
    ...result,
    score: parseFloat(result.score) // Convert score from string to number
  })) : []} />
        {/* <h1> {event} </h1> */}
      </BotCard>,
    );

    aiState.done([
      ...aiState.get(),
      {
        role: 'function',
        name: 'list_stocks',
        content: JSON.stringify(query),
      },
    ]);
  });

  completion.onFunctionCall(
    'show_stock_price',
    async ({ symbol, name, price, delta }) => {      
      reply.update(<BotCard><StockSkeleton /></BotCard>);
      const currentPrice = await cryptoPrice(name);
      console.log('show stock price:', currentPrice)

      const data = {
        title_id: title_id, 
        question: question, 
        answer: {
          symbol: symbol,
          price: currentPrice,
          delta: delta
        }, 
        type: "show_stock_price"
      }
      const res = await insertRoomHistory(data);

      reply.done(
        <BotCard>
          <Stock name={symbol} price={currentPrice} delta={delta} />
        </BotCard>,
      );

      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'show_stock_price',
          content: `[Price of ${symbol} = ${currentPrice}]`,
        },
      ]);
    },
  );

  completion.onFunctionCall(
    'show_stock_purchase_ui',
    async ({ symbol, name, price, numberOfShares = 100 }) => {
      if (numberOfShares <= 0 || numberOfShares > 1000) {
        reply.done(<BotMessage>Invalid amount</BotMessage>);
        aiState.done([
          ...aiState.get(),
          {
            role: 'function',
            name: 'show_stock_purchase_ui',
            content: `[Invalid amount]`,
          },
        ]);
        return;
      }

      const currentPrice = await cryptoPrice(name);
      console.log('show stock price:', currentPrice)

      const data = {
        title_id: title_id, 
        question: question, 
        answer: {
          symbol: symbol,
          price: currentPrice,
          numberOfShares: numberOfShares
        }, 
        type: "show_stock_purchase_ui"
      }
      const res = await insertRoomHistory(data);
      
      reply.done(
        <>
          <BotMessage>
            Sure!{' '}
            {typeof numberOfShares === 'number'
              ? `Click the button below to purchase ${numberOfShares} shares of $${symbol}:`
              : `How many $${symbol} would you like to purchase?`}
          </BotMessage>
          <BotCard showAvatar={false}>
            <Purchase
              defaultAmount={numberOfShares}
              name={symbol}
              price={+currentPrice}
            />
          </BotCard>
        </>,
      );
      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'show_stock_purchase_ui',
          content: `[UI for purchasing ${numberOfShares} shares of ${symbol}. Current price = ${price}, total cost = ${
            numberOfShares * price
          }]`,
        },
      ]);
    },
  );

  completion.onFunctionCall('fetch_solana_detail', async ({ address, description }) => {
    const oldDescription = description;

    const id = solanaAddressList.map((id, index) => ({ id: index + 1 }))

    const vectorStore = await MemoryVectorStore.fromTexts(
      solanaAddressList,
      id,
      new OpenAIEmbeddings()
    )

    const resultOne = await vectorStore.similaritySearch(address, 1)
    const s_address = resultOne[0].pageContent
    const context = solanaContent[resultOne[0].metadata.id - 1] + 'address: ' + s_address

    const prompt = `You are a helpful assistant. This is context related to this address ${s_address}.
                    context:${context}
                    questions: 'Fetches information about a specific solana wallet address.'
                    description: ${oldDescription}
                    answer based on above context and return the answer to string.`

    const chatModel = new ChatOpenAI({
      modelName: 'gpt-3.5-turbo'
    })
    const response = await chatModel.invoke(prompt)
    const answer = response.content.toString()

    const chatdata = {
      title_id: title_id, 
      question: question, 
      answer: answer, 
      type: "fetch_solana_detail"
    }
    const res = await insertRoomHistory(chatdata);

    reply.update(<BotMessage>{answer}</BotMessage>);
    reply.done();
    aiState.done([
      ...aiState.get(),
      {
        role: 'function',
        name: 'fetch_solana_detail',
        content: answer,
      },
    ]);
  });

  completion.onFunctionCall('fetch_wallet_details', async ({ address }) => {
    const url = `https://api.birdprotocol.com/analytics/address/${address}`
    console.log(`THIS IS THE BIRD ENGINE URL ${url}`)
    const response = await fetch(url)
    const data = JSON.stringify(await response.json(), null, 2)
    console.log(
      `This is the stringified response: ${JSON.stringify(data, null, 2)}`
    )

    const prompt = `You are a helpful assistant that shows the details of a particular ethreum wallet address.
                    questions: 'Fetches the the details about a spcific ethereum Wallet Address.'
                    data: ${data}
                    if asked for the risk or integrity score or rating, give the bird rating result only.`

    const chatModel = new ChatOpenAI({
      modelName: 'gpt-3.5-turbo'
    })

    const answer = (await chatModel.invoke(prompt)).content.toString();

    const chatdata = {
      title_id: title_id, 
      question: question, 
      answer: answer, 
      type: "fetch_wallet_details"
    }
    const res = await insertRoomHistory(chatdata);

    reply.update(<BotMessage>{answer}</BotMessage>);
    reply.done();
    aiState.done([
      ...aiState.get(),
      {
        role: 'function',
        name: 'fetch_wallet_details',
        content: answer,
      },
    ]);
  });

  return {
    id: Date.now(),
    display: reply.value,
  };
}

// Define necessary types and create the AI.

const initialAIState: {
  role: 'user' | 'assistant' | 'system' | 'function';
  content: string;
  id?: string;
  name?: string;
}[] = [];

const initialUIState: {
  id: number;
  display: React.ReactNode;
}[] = [];

export const AI = createAI({
  actions: {
    submitUserMessage,
    confirmPurchase,
  },
  initialUIState,
  initialAIState,
});