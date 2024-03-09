'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

// function IconAI({ className, ...props }: React.ComponentProps<'svg'>) {
//   return (
//     <svg
//       fill="currentColor"
//       viewBox="0 0 256 256"
//       role="img"
//       xmlns="http://www.w3.org/2000/svg"
//       className={cn('h-4 w-4', className)}
//       {...props}
//     >
//       <path d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path>
//     </svg>
//   );
// }

function IconAI({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={cn('size-8', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        className="fill-theme-500"
        fillRule="evenodd"
        d="M10.915 6.046c.116-.436.153-.919-.189-1.61.216-.417.142-.963-.29-1.413-.394-.416-1.458-.643-1.98-.732 2.291 1.955 2.08 3.38 1.917 3.85a8.3 8.3 0 0 0-.284.065c-1.3-.347-1.969-.746-2.806-1.483.163-.421.047-.94-.39-1.347-.395-.365-1.353-.53-1.905-.598.294.556 1.668 2.726 4.143 3.735a7.875 7.875 0 0 0-5.002 7.327c0 4.343 3.528 7.869 7.871 7.869s7.87-3.526 7.87-7.869c0-4.342-3.527-7.868-7.87-7.868a7.99 7.99 0 0 0-1.085.074ZM9.563 8.057c-2.443 1.74-2.86 5.359-.922 8.077 1.932 2.718 5.491 3.513 7.934 1.773 2.443-1.74 2.859-5.358.921-8.076-1.932-2.719-5.49-3.513-7.933-1.774Zm6.349 2.52a1.202 1.202 0 0 1 0 2.406 1.206 1.206 0 0 1-1.206-1.204c0-.664.542-1.203 1.206-1.203Zm-3.37 0c.664 0 1.206.538 1.206 1.202 0 .664-.542 1.203-1.206 1.203-.663 0-1.2-.539-1.2-1.203s.537-1.203 1.2-1.203Zm-.126.422c-.242.174-.258.571-.037.886.226.314.606.428.848.254.247-.174.263-.57.042-.885-.226-.315-.606-.429-.853-.255Zm3.37 0c-.248.174-.264.571-.037.886.22.314.6.428.847.254.242-.174.258-.57.037-.885-.226-.315-.606-.429-.848-.255ZM4.623 3.024c.095.516.332 1.584.753 1.977.363.338.785.45 1.153.368-1.037-.932-1.669-1.914-1.906-2.345Zm3.59-.366c.07.552.248 1.51.617 1.896.337.353.742.492 1.105.44-.163-.584-.616-1.38-1.721-2.336Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function IconVercel({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-label="Vercel logomark"
      role="img"
      viewBox="0 0 74 64"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function IconGitHub({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function IconSeparator({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  );
}

function IconArrowRight({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  );
}

function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  );
}

function IconPlus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  );
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  );
}

function IconSpinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4 animate-spin', className)}
      {...props}
    >
      <path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" />
    </svg>
  );
}

function IconMessage({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" />
    </svg>
  );
}

function IconCopy({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  );
}

function IconCheck({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

function IconClose({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
    </svg>
  );
}

function IconShare({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" />
    </svg>
  );
}

function IconUsers({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" />
    </svg>
  );
}

function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" />
    </svg>
  );
}

function IconChevronUpDown({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z" />
    </svg>
  );
}

function IconSparkles({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path
        d="M7.73047 16.2559C7.81836 16.2559 7.88916 16.2266 7.94287 16.168C8.00146 16.1143 8.03809 16.0435 8.05273 15.9556C8.15039 15.1841 8.25781 14.5347 8.375 14.0073C8.49707 13.48 8.6582 13.0479 8.8584 12.7109C9.05859 12.374 9.32471 12.1055 9.65674 11.9053C9.98877 11.7051 10.4136 11.5513 10.9312 11.4438C11.4536 11.3315 12.0933 11.2339 12.8501 11.1509C12.9429 11.1411 13.0161 11.1069 13.0698 11.0483C13.1284 10.9897 13.1577 10.9165 13.1577 10.8286C13.1577 10.7407 13.1284 10.6675 13.0698 10.6089C13.0161 10.5503 12.9429 10.5161 12.8501 10.5063C12.0933 10.4233 11.4536 10.3281 10.9312 10.2207C10.4136 10.1084 9.98877 9.95215 9.65674 9.75195C9.32471 9.55176 9.05859 9.2832 8.8584 8.94629C8.6582 8.60938 8.49707 8.17725 8.375 7.6499C8.25781 7.12256 8.15039 6.4707 8.05273 5.69434C8.03809 5.61133 8.00146 5.54297 7.94287 5.48926C7.88916 5.43066 7.81836 5.40137 7.73047 5.40137C7.64258 5.40137 7.56934 5.43066 7.51074 5.48926C7.45703 5.54297 7.42285 5.61133 7.4082 5.69434C7.31543 6.4707 7.20801 7.12256 7.08594 7.6499C6.96875 8.17725 6.80762 8.60938 6.60254 8.94629C6.40234 9.2832 6.13623 9.55176 5.8042 9.75195C5.47217 9.95215 5.04736 10.1084 4.52979 10.2207C4.01221 10.3281 3.37256 10.4233 2.61084 10.5063C2.51807 10.5161 2.44238 10.5503 2.38379 10.6089C2.3252 10.6675 2.2959 10.7407 2.2959 10.8286C2.2959 10.9165 2.3252 10.9897 2.38379 11.0483C2.44238 11.1069 2.51807 11.1411 2.61084 11.1509C3.36768 11.2485 4.00488 11.3584 4.52246 11.4805C5.04004 11.5977 5.4624 11.7539 5.78955 11.9492C6.12158 12.1445 6.3877 12.4082 6.58789 12.7402C6.78809 13.0674 6.94922 13.4922 7.07129 14.0146C7.19336 14.5371 7.30566 15.1841 7.4082 15.9556C7.42285 16.0435 7.45703 16.1143 7.51074 16.168C7.56934 16.2266 7.64258 16.2559 7.73047 16.2559ZM3.03564 8.57275C3.09424 8.57275 3.14307 8.55322 3.18213 8.51416C3.22119 8.4751 3.24316 8.42871 3.24805 8.375C3.31152 7.91113 3.375 7.55225 3.43848 7.29834C3.50195 7.03955 3.60205 6.84668 3.73877 6.71973C3.87549 6.58789 4.07812 6.48535 4.34668 6.41211C4.61523 6.33887 4.98877 6.25586 5.46729 6.16309C5.59424 6.14355 5.65771 6.07275 5.65771 5.95068C5.65771 5.89209 5.63818 5.8457 5.59912 5.81152C5.56494 5.77246 5.521 5.74805 5.46729 5.73828C4.98877 5.66992 4.61279 5.604 4.33936 5.54053C4.0708 5.47217 3.86816 5.37207 3.73145 5.24023C3.59961 5.10352 3.50195 4.90332 3.43848 4.63965C3.375 4.37109 3.31152 4.00244 3.24805 3.53369C3.2334 3.40186 3.1626 3.33594 3.03564 3.33594C2.90869 3.33594 2.83545 3.4043 2.81592 3.54102C2.76221 4 2.70361 4.35889 2.64014 4.61768C2.57666 4.87646 2.47656 5.07178 2.33984 5.20361C2.20312 5.33057 1.99805 5.43066 1.72461 5.50391C1.45605 5.57227 1.08252 5.65039 0.604004 5.73828C0.477051 5.7627 0.413574 5.8335 0.413574 5.95068C0.413574 6.07275 0.486816 6.14355 0.633301 6.16309C1.10205 6.24609 1.4707 6.32178 1.73926 6.39014C2.0127 6.4585 2.21533 6.55859 2.34717 6.69043C2.479 6.82227 2.57666 7.02002 2.64014 7.28369C2.70361 7.54248 2.76221 7.90381 2.81592 8.36768C2.83545 8.50439 2.90869 8.57275 3.03564 8.57275ZM6.40479 3.82666C6.48291 3.82666 6.53174 3.78271 6.55127 3.69482C6.61475 3.32861 6.67578 3.06006 6.73438 2.88916C6.79297 2.71338 6.90771 2.58887 7.07861 2.51562C7.24951 2.44238 7.5376 2.37158 7.94287 2.30322C8.03076 2.28369 8.07471 2.23486 8.07471 2.15674C8.07471 2.06885 8.03076 2.02002 7.94287 2.01025C7.5376 1.93701 7.24951 1.86621 7.07861 1.79785C6.90771 1.72461 6.79297 1.60254 6.73438 1.43164C6.67578 1.25586 6.61475 0.982422 6.55127 0.611328C6.53174 0.523438 6.48291 0.479492 6.40479 0.479492C6.31689 0.479492 6.26807 0.523438 6.2583 0.611328C6.18994 0.982422 6.12646 1.25586 6.06787 1.43164C6.01416 1.60254 5.89941 1.72461 5.72363 1.79785C5.55273 1.86621 5.26465 1.93701 4.85938 2.01025C4.77148 2.02002 4.72754 2.06885 4.72754 2.15674C4.72754 2.23486 4.77148 2.28369 4.85938 2.30322C5.26465 2.37158 5.55273 2.44238 5.72363 2.51562C5.89941 2.58887 6.01416 2.71338 6.06787 2.88916C6.12646 3.06006 6.18994 3.32861 6.2583 3.69482C6.26807 3.78271 6.31689 3.82666 6.40479 3.82666Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconPlane({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-5', className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          className="fill-type-500"
          fillRule="evenodd"
          d="M1.925 1.669A.8.8 0 0 0 .909 2.803L6.274 12 .909 21.197a.8.8 0 0 0 1.016 1.134l21.6-9.6a.8.8 0 0 0 0-1.462l-21.6-9.6Zm5.829 9.691L3.539 4.138 21.232 12 3.54 19.862l4.215-7.222H14.4a.64.64 0 0 0 0-1.28H7.754Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

function IconData({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-5', className)}
      {...props}
    >
      <path
        d="M6.57349 4.99951V6.99951M10.5735 4.99951V6.99951M6.57349 16.9995V18.9995M10.5735 16.9995V18.9995M14.5735 6H18.5735M14.5735 18H18.5735M19.8934 9.99977H5.26344C3.78344 9.99977 2.58344 8.78978 2.58344 7.31978V4.68977C2.58344 3.20977 3.79344 2.00977 5.26344 2.00977H19.8934C21.3734 2.00977 22.5734 3.21977 22.5734 4.68977V7.31978C22.5734 8.78978 21.3634 9.99977 19.8934 9.99977ZM19.8934 21.9998H5.26344C3.78344 21.9998 2.58344 20.7898 2.58344 19.3198V16.6898C2.58344 15.2098 3.79344 14.0098 5.26344 14.0098H19.8934C21.3734 14.0098 22.5734 15.2198 22.5734 16.6898V19.3198C22.5734 20.7898 21.3634 21.9998 19.8934 21.9998Z"
        stroke="#e8e8d9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconModel({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      className={cn('size-5', className)}
      {...props}
    >
      <path
        d="M12.8366 9.03308V3.53308M12.8366 9.03308C11.5466 9.03308 10.4166 9.73308 9.80658 10.7831M12.8366 9.03308C14.1266 9.03308 15.2566 9.73313 15.8666 10.7831M12.8366 21.533V16.033M12.8366 16.033C14.1266 16.033 15.2566 15.3331 15.8666 14.2831M12.8366 16.033C11.5466 16.033 10.4166 15.3331 9.80658 14.2831M10.8366 3.53308H14.8366M10.8366 21.5331H14.8366M9.80658 10.7831L5.04658 8.03308M9.80658 10.7831C9.50658 11.3031 9.33658 11.8931 9.33658 12.5331C9.33658 13.1731 9.50658 13.7631 9.80658 14.2831M20.6266 17.0331L15.8666 14.2831M15.8666 14.2831C16.1666 13.7631 16.3366 13.1731 16.3366 12.5331C16.3366 11.8931 16.1666 11.3031 15.8666 10.7831M4.04659 9.76309L6.04659 6.3031M19.6266 18.7631L21.6266 15.3031M9.80658 14.2831L5.04658 17.0331M15.8666 10.7831L20.6266 8.03308M21.6266 9.76309L19.6266 6.3031M6.04659 18.7631L4.04659 15.3031"
        stroke="#e8e8d9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPromptHistory({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-5', className)}
      {...props}
    >
      <path
        d="M18.25 16.2513V17.7513L19.5 18.5013M14.5 17.5013C14.5 18.7013 15.03 19.7713 15.86 20.5013C16.57 21.1213 17.49 21.5013 18.5 21.5013C20.71 21.5013 22.5 19.7113 22.5 17.5013C22.5 16.2413 21.92 15.1113 21 14.3813C20.31 13.8313 19.44 13.5013 18.5 13.5013C16.29 13.5013 14.5 15.2913 14.5 17.5013Z"
        stroke="#e8e8d9"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 10.5014H8M1.5 7.4314V13.4314C1.5 14.9314 2 16.1814 2.88001 17.0614C3.75001 17.9314 5 18.4314 6.5 18.4314V20.5614C6.5 21.3614 7.38999 21.8414 8.04999 21.4014L12.5 18.4314H14.62C14.54 18.1314 14.5 17.8214 14.5 17.5014C14.5 16.4814 14.89 15.5414 15.53 14.8314C16.25 14.0114 17.32 13.5014 18.5 13.5014C19.62 13.5014 20.64 13.9614 21.37 14.7114C21.46 14.3114 21.5 13.8814 21.5 13.4314V7.4314C21.5 4.4314 19.5 2.4314 16.5 2.4314H6.5C3.5 2.4314 1.5 4.4314 1.5 7.4314Z"
        stroke="#e8e8d9"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconTools({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn('size-5', className)}
      {...props}
    >
      <path
        d="M6.74016 6.65647L18.2402 18.1565M18.2402 6.65647L6.74016 18.1565M21.4402 14.9564L15.0502 21.3464C13.6502 22.7464 11.3502 22.7464 9.94018 21.3464L3.55017 14.9564C2.15017 13.5564 2.15017 11.2564 3.55017 9.84639L9.94018 3.45637C11.3402 2.05637 13.6402 2.05637 15.0502 3.45637L21.4402 9.84639C22.8402 11.2564 22.8402 13.5564 21.4402 14.9564Z"
        stroke="#e8e8d9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export {
  IconAI,
  IconVercel,
  IconGitHub,
  IconSeparator,
  IconUser,
  IconPlus,
  IconArrowRight,
  IconArrowElbow,
  IconSpinner,
  IconMessage,
  IconCopy,
  IconCheck,
  IconClose,
  IconShare,
  IconUsers,
  IconExternalLink,
  IconChevronUpDown,
  IconSparkles,
  IconPlane,
  IconData,
  IconModel,
  IconPromptHistory,
  IconTools
};
