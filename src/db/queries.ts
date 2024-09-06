import "server-only";

import { cache } from "react";
import db from ".";
import { desc } from "drizzle-orm";
import { notes } from "./schema";

export const getNotes = cache(async () => {
  const data = await db.query.notes.findMany({
    orderBy: [desc(notes.createdAt)],
  });

  return data;
});
