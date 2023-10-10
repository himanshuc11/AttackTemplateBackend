import dotenv from "dotenv" 
dotenv.config({ path: `.env.${process.env.NODE_ENV}`});

console.log("ENV: ", process.env.SECRET);
