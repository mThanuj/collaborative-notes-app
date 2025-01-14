import "dotenv/config";

export const config = {
  env: {
    databaseUrl: process.env.DATABASE_URL!,
  },
};
