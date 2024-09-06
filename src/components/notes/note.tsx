"use client";

import { notes } from "@/db/schema";
import { FC, useTransition } from "react";
import { Button } from "../ui/button";
import { deleteNoteAction } from "@/actions/note-actions";

interface Props {
  note: typeof notes.$inferSelect;
}

const Note: FC<Props> = ({ note }) => {
  const [isPending, startTransition] = useTransition();

  const handleDeletion = (formData: FormData) => {
    startTransition(() => {
      deleteNoteAction(formData);
    });
  };

  return (
    <div
      key={note.id}
      className="rounded-lg border border-gray-100 px-4 py-2 shadow-lg transition hover:shadow-xl"
    >
      <div className="flex space-x-3">
        <h1 className="block text-sm font-medium leading-6 text-gray-900">
          Title:
        </h1>
        <p className="block text-sm leading-6 text-gray-900">{note.title}</p>
      </div>
      <div className="flex space-x-3">
        <h1 className="block text-sm font-medium leading-6 text-gray-900">
          Content:
        </h1>
        <p className="block text-sm leading-6 text-gray-900">{note.content}</p>
      </div>
      <div className="flex space-x-3">
        <h1 className="block text-sm font-medium leading-6 text-gray-900">
          Created at:
        </h1>
        <p className="block text-sm leading-6 text-gray-900">
          {note.createdAt}
        </p>
      </div>

      <form action={handleDeletion} className="mt-2">
        <input type="hidden" name="id" value={note.id} />
        <Button
          type="submit"
          variant="destructive"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? "Deleting..." : "Delete"}
        </Button>
      </form>
    </div>
  );
};

export default Note;
