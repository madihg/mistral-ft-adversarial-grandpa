# Fine-Tuned Mistral Chatbot

A chatbot built with Next.js and Mistral AI, using a fine-tuned model.

## Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:madihg/mistral-ft-adversarial-grandpa.git
   cd mistral-ft-adversarial-grandpa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your Mistral API key:
   ```
   MISTRAL_API_KEY=your_api_key_here
   ```

## Local Development

Run the Next.js application:

```bash
npm run dev
```

The application will be available at http://localhost:3000.

## Deployment to Vercel

1. Push your code to GitHub.
2. Connect your GitHub repository to Vercel.
3. Add your environment variables in the Vercel dashboard:
   - `MISTRAL_API_KEY`: Your Mistral API key
4. Deploy!

## Environment Variables

- `MISTRAL_API_KEY`: Your Mistral AI API key (required)

## Project Structure

- `src/app/api/chat/route.ts`: API route for handling chat requests with the fine-tuned Mistral model.
- `src/app/page.tsx`: Main chat UI built with Next.js.
- `src/app/layout.tsx`: Root layout for the Next.js application.
- `src/app/globals.css`: Global styles.
- `public/`: Static files (images, icons).
- `package.json`: Node.js dependencies.
- `next.config.ts`: Next.js configuration.
- `tsconfig.json`: TypeScript configuration.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
