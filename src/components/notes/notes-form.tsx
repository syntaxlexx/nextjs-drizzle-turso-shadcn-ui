"use client";

import { addNoteAction } from "../../actions/note-actions";
import { useRef, useTransition } from "react";
import { Button } from "../ui/button";

export default function NotesForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmitHandler = (formData: FormData) => {
    startTransition(() => {
      addNoteAction(formData);
      ref.current?.reset();
    });
  };

  return (
    <div className="bg-slate-200 px-4 py-6 rounded-lg mt-5 ring-1 ring-inset ring-slate-300">
      <h1 className="text-lg font-semibold leading-7 text-gray-900">
        Add Note
      </h1>

      <form action={onSubmitHandler} ref={ref}>
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="title">
          Title
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="title"
          required
        />
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="content">
          Content
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="content"
          required
        />

        <Button type={"submit"} className="w-full mt-2 " disabled={isPending}>
          {isPending ? "Adding..." : "Add"}
        </Button>
      </form>
    </div>
  );
}
