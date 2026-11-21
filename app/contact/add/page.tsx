
import Link from "next/link";
import { redirect } from "next/navigation";
import { createContactAction } from "../../actions/contact";
import { getSession } from "../../_lib/session";

type AddContactPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function AddContactPage({
  searchParams,
}: AddContactPageProps) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow">
      <h1 className="mb-6 text-2xl font-bold">
        Add New Contact
      </h1>

      {error === "invalid" && (
        <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
          Please enter a valid name and email.
        </p>
      )}

      {error === "server" && (
        <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
          Failed to create contact. Please try again.
        </p>
      )}

      <form action={createContactAction} className="space-y-4">
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
            placeholder="Enter contact name"
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
            placeholder="Enter contact email"
            required
            className="mt-2 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Add Contact
        </button>
      </form>

      <Link
        href="/contact"
        className="mt-5 inline-block text-blue-600 hover:underline"
      >
        Back to Contacts
      </Link>
    </div>
  );
}
