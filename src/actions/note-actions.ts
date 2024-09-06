"use server";

import db from "@/db";
import { notes } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addNoteAction(formData: FormData) {
  const rawFormData = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  if (!rawFormData.title || !rawFormData.content) {
    throw new Error("Title and content are required");
  }

  const { userId } = auth();

  await db.insert(notes).values({ ...rawFormData, userId });

  revalidatePath("/");
}

export async function deleteNoteAction(formData: FormData) {
  const rawFormData = {
    id: formData.get("id"),
  };

  if (!rawFormData.id) {
    throw new Error("id is required to delete note.");
  }

  let noteId = Number(rawFormData.id);

  await db.delete(notes).where(eq(notes.id, noteId)).returning();

  revalidatePath("/");
}
