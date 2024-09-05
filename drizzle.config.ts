import "./envConfig.ts";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite", // "mysql" | "sqlite" | "postgresql"
  driver: "turso",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_DATABASE_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
});
