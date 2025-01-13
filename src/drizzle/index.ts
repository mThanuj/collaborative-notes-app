import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) {
  console.log("DATABASE_URL is not defined");
  process.exit(1);
}

const db = drizzle(process.env.DATABASE_URL);

export { db };
