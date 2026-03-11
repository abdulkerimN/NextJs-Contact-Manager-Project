import { ContactType } from "../_types/contact";

const API_URL = "http://localhost:3001/contacts";

export async function getContacts() {
  const res = await fetch(API_URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }

  return res.json();
}

export async function getContactByid(Id: string) {
  const response = await fetch(`${API_URL}/contacts/${Id}`);
  return response.json();
}

// export async function createContact(contact:ContactType) {
//   const response = await fetch(`${API_URL}/contacts`,contact);
//   return response.json();
// }
export async function createContact(contact: ContactType) {
  const response = await fetch(`${API_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  return response.json();
}

export async function updateContact(id: string, contact: ContactType) {
  const response = await fetch(`${API_URL}/contacts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  return response.json();
}

export async function deleteContact(id: string) {
  const response = await fetch(`${API_URL}/contacts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
