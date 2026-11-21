import { ContactType } from "../_types/contact";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "./DeleteButton";

type ContactListProps = {
  contacts: ContactType[];
};

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Your Contacts</h1>

        <Link
          href="/contact/add"
          className="rounded bg-blue-600 px-3 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Add Contact
        </Link>
      </div>

      {contacts.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <p className="text-gray-500">You don't have any contacts yet.</p>

          <Link
            href="/contact/add"
            className="mt-3 inline-block text-blue-600 hover:underline"
          >
            Add your first contact
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between rounded-lg border bg-white p-4"
            >
              <div>
                <h2 className="text-lg font-semibold">{contact.name}</h2>
                <p className="text-sm text-gray-500">{contact.email}</p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/contact/edit/${contact.id}`}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                  <FiEdit />
                  Edit
                </Link>

                <DeleteButton contact={contact} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}