import { config } from "@/lib/config";
import { drizzle } from "drizzle-orm/neon-http";

const db = drizzle(config.env.databaseUrl);

export { db };
