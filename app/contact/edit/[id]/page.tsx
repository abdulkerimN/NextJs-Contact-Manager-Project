
import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { getSession } from "../../../_lib/session";
import { getContactById } from "../../../api/contact";
import { updateContactAction } from "../../../actions/contact";

type EditContactPageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function EditContactPage({
  params,
  searchParams,
}: EditContactPageProps) {
  const { id } = await params;
  const { error } = await searchParams;

  // Check login
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  // Fetch contact
  let contact;

  try {
    contact = await getContactById(id);
  } catch {
    notFound();
  }

  // Check contact ownership
  if (contact.userId !== session.id) {
    notFound();
  }

  // Connect the contact ID to the Server Action
  const updateAction = updateContactAction.bind(null, id);

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow">
      <h1 className="mb-6 text-2xl font-bold">
        Edit Contact
      </h1>

      {error === "invalid" && (
        <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
          Please enter a valid name and email.
        </p>
      )}

      {error === "server" && (
        <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
          Failed to update contact. Please try again.
        </p>
      )}

      <form action={updateAction} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            defaultValue={contact.name}
            required
            className="mt-2 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            defaultValue={contact.email}
            required
            className="mt-2 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Update Contact
        </button>
      </form>

      <Link
        href="/contact"
        className="mt-5 inline-block text-blue-600 hover:underline"
      >
        Cancel
      </Link>
    </div>
  );
}
