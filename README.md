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
Second setup Prisma locally.<br> 
1.) Setup a .env file and create a variable called DATABASE_URL and set it equal to your local MySQL database<br>  

2.) run 'npx prisma db push' to establish the schema and create the table in your local database<br>  

The Client instructions are at https://github.com/Mccaryr/nooro-client<br>

Next run 'npm start' and your API should be live at http://localhost:3001!
