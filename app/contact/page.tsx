import ContactList from "../_components/ContactList";
import { getContacts } from "../api/contact";

export default async function ContactPage() {
  const contacts = await getContacts();

  return <ContactList contacts={contacts} />;
}
