"use client";

import { notes } from "@/db/schema";
import Note from "./note";

type Props = {
  notes: (typeof notes.$inferSelect)[];
};

export default function Notes({ notes }: Props) {
  return (
    <div className="space-y-2 mt-2">
      {notes &&
        notes
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .map((note) => <Note key={note.id} note={note} />)}
    </div>
  );
}
