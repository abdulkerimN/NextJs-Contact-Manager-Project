"use server";
import { createContact, updateContact } from "../api/contact";
import { redirect } from "next/navigation";
import { getSession } from "../_lib/session";
import { revalidatePath } from "next/cache";

const API_URL = "http://localhost:3001/contacts";

export async function deleteContactAction(id: string) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to delete contacts.");
  }

  // Check that the contact belongs to the logged-in user
  const contactResponse = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (!contactResponse.ok) {
    throw new Error("Contact not found.");
  }

  const contact = await contactResponse.json();

  if (contact.userId !== session.id) {
    throw new Error("You are not authorized to delete this contact.");
  }

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete contact.");
  }

  revalidatePath("/contact");
}
export async function createContactAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  // Check input
  if (!name || !email) {
    redirect("/contact/add?error=invalid");
  }

  // Check whether the user is logged in
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  try {
    // Create contact and associate it with the logged-in user
    await createContact({
      name,
      email,
      userId: session.id,
    });

    // Refresh the contacts page
    revalidatePath("/contact");
  } catch (error) {
    console.error("Create contact error:", error);
    redirect("/contact/add?error=server");
  }

  // Redirect after successful creation
  redirect("/contact");
}

export async function updateContactAction(
  id: string,
  formData: FormData
) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!name || !email) {
    redirect(`/contact/edit/${id}?error=invalid`);
  }

  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  // Find the existing contact
  let existingContact;

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      redirect("/contact");
    }

    existingContact = await response.json();
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error;
    }

    redirect("/contact");
  }

  // Check ownership
  if (existingContact.userId !== session.id) {
    redirect("/contact");
  }

  try {
    await updateContact(id, {
      name,
      email,
      userId: session.id,
    });
  } catch (error) {
    console.error("Update contact error:", error);
    redirect(`/contact/edit/${id}?error=server`);
  }

  revalidatePath("/contact");
  redirect("/contact");
}
