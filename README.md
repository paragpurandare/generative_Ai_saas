# Dork AI - Your All-in-One Creative Hub

![Hero Image](/hero.png)

This is a repository for Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe [`create-next-app`]().

Features -

Tailwind design
Tailwind animations and effects
Full responsiveness
Clerk Authentication (Email, Google, 9+ Social Logins)
Client form validation and handling using react-hook-form
Server error handling using react-toast
Image Generation Tool (Open AI)
Video Generation Tool (Replicate AI)
Conversation Generation Tool (Open AI)
Music Generation Tool (Replicate AI)
Page loading state
Stripe monthly subscription - yet to add
Free tier with API limiting- yet too come
How to write POST, DELETE, and GET routes in route handlers (app/api)
How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
How to handle relations between Server and Child components!
How to reuse layouts
Folder structure in Next 13 App Router


## Getting Started

Prerequisites

cloning the repository [`git clone `]()

## Install dependencies / packages
```
npm i
```

## Setup .env file
```

[`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"`]
```

## Setup Prisma

Add MySQL Database (I used PlanetScale)
```
npx prisma db push
```

## Start the app
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out  [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
