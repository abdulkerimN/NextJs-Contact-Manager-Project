'use client'
import { ContactType } from "../_types/contact";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "./DeleteButton";

export default function ContactList({ contacts }: { contacts: ContactType[] }) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Your Contacts</h1>

        <Link
          href="/contact/add"
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Add Contact
        </Link>
      </div>

      {/* Contact List */}
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="p-4 border rounded-lg flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-semibold">{contact.name}</h2>
            <p className="text-gray-500 text-sm">{contact.email}</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/contact/edit/${contact.id}`}
              className="flex items-center gap-1 text-blue-600"
            >
              <FiEdit />
              Edit
            </Link>
            <DeleteButton contact={contact}/>
          </div>
        </div>
      ))}
    </div>
  );
}
