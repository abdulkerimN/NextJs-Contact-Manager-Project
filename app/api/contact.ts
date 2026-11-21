import type { ContactType } from "../_types/contact";
import { getSession } from "../_lib/session";

const API_URL = "http://localhost:3001/contacts";

// Get contacts belonging to the logged-in user
export async function getContacts(): Promise<ContactType[]> {
  const session = await getSession();

  if (!session) {
    return [];
  }

  const params = new URLSearchParams({
    userId: session.id,
  });

  const res = await fetch(`${API_URL}?${params.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }

  return res.json();
}

// Get one contact by ID
export async function getContactById(id: string): Promise<ContactType> {
  const res = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch contact");
  }

  return res.json();
}

// Create a contact

export async function createContact(
  contact: Omit<ContactType, "id">
): Promise<ContactType> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

  if (!res.ok) {
    throw new Error("Failed to create contact");
  }

  return res.json();
}


// Update a contact

export async function updateContact(
  id: string,
  contact: Omit<ContactType, "id">
): Promise<ContactType> {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

  if (!res.ok) {
    throw new Error("Failed to update contact");
  }

  return res.json();
}
