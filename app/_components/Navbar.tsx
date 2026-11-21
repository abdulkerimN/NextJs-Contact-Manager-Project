import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";

export default async function Navbar() {
  const session = await getSession();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>

        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Link
                href="/contact"
                className="font-semibold text-gray-700 transition-colors hover:text-blue-600"
              >
                Contacts
              </Link>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="font-semibold text-gray-700 transition-colors hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="font-semibold text-gray-700 transition-colors hover:text-blue-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}