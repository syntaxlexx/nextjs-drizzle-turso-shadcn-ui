import "../../envConfig.ts";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_DATABASE_AUTH_TOKEN!,
});

export const db = drizzle(client);
