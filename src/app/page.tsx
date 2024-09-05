import Hero from "@/components/hero";
import Notes from "@/components/notes/notes";
import NotesForm from "@/components/notes/notes-form";

export default async function Home() {
  return (
    <div className="relative min-h-screen space-y-8">
      <Hero />

      <div className="container min-h-96 grid lg:grid-cols-2 gap-6">
        <div className="h-full flex justify-center w-full">
          <NotesForm />
        </div>
        <div className="h-full max-h-[700px] overflow-y-auto w-full">
          <Notes />
        </div>
      </div>
    </div>
  );
}
