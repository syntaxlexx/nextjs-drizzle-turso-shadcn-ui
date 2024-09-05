import { notes } from "@/db/schema";
import Note from "./note";
import { db } from "@/db";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

export default async function Notes({}: Props) {
  const allNotes = await db.select().from(notes).all();

  return (
    <div className="space-y-2 w-full">
      <Suspense fallback={<NotesSkeleton />}>
        {allNotes &&
          allNotes
            .sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .map((note) => <Note key={note.id} note={note} />)}
      </Suspense>
    </div>
  );
}

const NotesSkeleton = () => {
  return (
    <div className="space-y-2 mt-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="bg-slate-100 rounded-lg p-2 ring-1 ring-inset ring-gray-200 ">
          <Skeleton className="h-6 w-full" />

          <div className="flex space-x-3">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <Skeleton className="h-20 w-full" />
        </div>
      ))}
    </div>
  );
};
