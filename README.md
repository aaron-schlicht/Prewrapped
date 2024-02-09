# Prewrapped (Spotify Data Dashboard)
### About
Prewrapped is a web application that integrates Spotify's API to retrieve and display data to give Spotify users insight into their listening habits year-round, ahead of their annual "Wrapped" review. All data is attributed to Spotify.

### Features
- Spotify Sign-in:
  Users sign in to Prewrapped with their Spotify account to get personalized data
- Top Artists/Top Songs:
  On log-in, this view shows users their top artists and top songs, with the abilitiy to select from the past month, 6 months, or all time
- More coming soon:
  Recommendations
  Graphs and other analytics

### Technologies used
Prewrapped is built using Next.js, with authentication using NextAuth and the new Spotify web sdk library "@spotify/web-api-ts-sdk". Currently it is styled using Tailwind CSS ("tailwindcss") and Framer Motion ("framer-motion")

 
Prewrapped is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
