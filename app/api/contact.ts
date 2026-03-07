import axios from "axios";
import { ContactType } from "../_types/contact";

const API_URL = "http://localhost:3001";

export async function getContacts(userId: string) {
  const response = await axios.get(`${API_URL}/contacts?userId=${userId}`);
  return response.data;
}

export async function getContactByid(id: string) {
  const response = await axios.get(`${API_URL}/contacts/${id}`);
  return response.data;
}

export async function createContact(contact: ContactType) {
  const response = await axios.post(`${API_URL}/contacts`, contact);
  return response.data;
}

export async function updateContact(id: string, contact: ContactType) {
  const response = await axios.put(`${API_URL}/contacts/${id}`, contact);
  return response.data;
}

export async function deleteContact(id: string) {
  const response = await axios.delete(`${API_URL}/contacts/${id}`);
  return response.data;
}
