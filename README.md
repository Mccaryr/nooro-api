# nooro-api
 
##Getting Started

First install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
Second setup Prisma locally. 
1.) Setup a .env file and create a variable called DATABASE_URL and set it equal to your local MySQL database
2.) run 'npx prisma db push' to establish the schema and create the table in your local database

Next run 'npm start' and your API should be live!
