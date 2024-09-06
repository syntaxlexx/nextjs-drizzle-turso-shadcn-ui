import { getNotes } from "@/db/queries";
import { Skeleton } from "../ui/skeleton";
import Note from "./note";

type Props = {};

export default async function Notes({}: Props) {
  const allNotes = await getNotes();

  return (
    <div>
      <div>
        <h1 className="text-center text-xl font-semibold leading-7 text-gray-900">
          Notes
        </h1>
      </div>
      <div className="space-y-4">
        {allNotes &&
          allNotes
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            )
            .map((note) => <Note key={note.id} note={note} />)}
      </div>
    </div>
  );
}

export const NotesSkeleton = () => {
  return (
    <div className="mt-2 space-y-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg bg-slate-100 p-2 ring-1 ring-inset ring-gray-200"
        >
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
