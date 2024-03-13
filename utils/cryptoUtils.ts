export const cryptoPrice = async (name: String) => {
    const vsCurrency = "USD";
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=${vsCurrency}`
    const response = await fetch(url)
    const data = await response.json()
    const currentPrice = data[name.toLowerCase()]?.[vsCurrency.toLowerCase()]
    console.log(`Current Holding here: ${currentPrice}`)
	return currentPrice;
}

// export const cryptoCompanyHoldings = async (coin_id: string) => {
//     const url = `https://api.coingecko.com/api/v3/companies/public_treasury/${coin_id}`
//     const response = await fetch(url)
//     const data = await response.json()
//     const currentHolding = data[coin_id.toLowerCase()]
//     console.log(`Current Holding here: ${currentHolding}`)
// 	return currentHolding;
// }

export const trendingCrypto = async () => {
    const url = `https://api.coingecko.com/api/v3/search/trending`;
    const response = await fetch(url);
    const data = await response.json();

    // Map to get symbols and prices
    const trendingTokens = data.coins.map((coin: any) => {
        const symbol: string = coin.item.symbol;
        const price: string = coin.item.data.price;
        return { symbol, price };
    });

    // Format the results as a list
    const formattedList = trendingTokens.map((token: { symbol: string, price: string }, index: number) => {
        return `${index + 1}) ${token.symbol}, price is ${token.price}`;
    }).join('\n');

    console.log(`RESULT OF TRENDING TOKENS:\n${formattedList}`);
    return formattedList; // Now returning the formatted string
};




export const cryptoHistoricalData = async (name: String) => {
    // const timestamp24hAgo = Date.now() - 24 * 60 * 60 * 1000;
    // const url = `https://coingecko.p.rapidapi.com/coins/${name}/history?date=08-03-2024`;
    // const response = await fetch(url);
    // console.log('crypto historical data')
    // console.log(response)
    // // return response.data.prices;

    // const url = 'https://api.coingecko.com/api/v3/coins/Ethereum/history?date=08-03-2024';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'd2fa07070dmsh6bf9c4cc978655dp1fb325jsnc7f61370fdc2',
    //         'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    //     }
    // };

    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log('cryptoUtils');
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }
  };