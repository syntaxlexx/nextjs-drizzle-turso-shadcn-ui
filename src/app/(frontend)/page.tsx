import Hero from "@/components/hero";
import Notes, { NotesSkeleton } from "@/components/notes/notes";
import NotesForm from "@/components/notes/notes-form";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="relative min-h-screen space-y-8">
      <Hero />

      <div className="container grid min-h-96 gap-6 lg:grid-cols-2">
        <div className="flex h-full w-full justify-center">
          <NotesForm />
        </div>

        <div className="h-full max-h-[70vh] w-full overflow-y-auto">
          <Suspense fallback={<NotesSkeleton />}>
            <Notes />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
