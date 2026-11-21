
import Link from "next/link";
import { registerAction } from "../../actions/auth";

type RegisterPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function RegisterPage({
  searchParams,
}: RegisterPageProps) {
  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Create an Account
      </h1>

      {error === "exists" && (
        <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
          This email is already registered.
        </p>
      )}

      {error === "invalid" && (
        <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
          Please enter valid information. Password must be at least 6 characters.
        </p>
      )}

      {error === "server" && (
        <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
          Something went wrong. Please try again.
        </p>
      )}

      <form action={registerAction} className="space-y-4">
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
            placeholder="Enter your name"
            required
            className="mt-2 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="mt-2 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            minLength={6}
            required
            className="mt-2 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Create Account
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
