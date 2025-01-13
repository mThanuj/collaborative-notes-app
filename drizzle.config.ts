import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  console.log("DATABASE_URL is not defined");
  process.exit(1);
}

export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
