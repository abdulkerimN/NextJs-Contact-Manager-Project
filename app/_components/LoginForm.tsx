// use client component
"use client"
import { loginAction } from "../actions/auth";

 
export default function LoginForm() {
  return (
    <form action={loginAction} className="space-x-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder=" enter ur email"
          required
          className="mt-2 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mt-4">
        <label className=" block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder=" enter ur passwrod"
          required
          className="mt-2 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <button type="submit" className="w-full flex justify-center px-4 py-2 mt-5 border border-transparent rounded bg-blue-600 text-white">Login</button>
    </form>
  );
}
