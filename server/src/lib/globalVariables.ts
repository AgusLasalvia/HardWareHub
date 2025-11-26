import { config } from "dotenv";

config();

export const Server = {
  PORT: process.env.PORT || 5000
}

export const DATABASE = {
  URL: process.env.DATABASE_URL
}


