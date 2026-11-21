import { loginAction } from "../actions/auth";

export default function LoginForm() {
  return (
    <form action={loginAction} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="mt-2 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
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
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="mt-2 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="mt-2 flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}