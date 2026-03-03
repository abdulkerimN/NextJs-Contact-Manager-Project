import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
const session= true;
  return (
    <div>
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Contact Manager
          </Link>
          <div className="flex items-center space-x-4">
            {session ? (
            <>
              <Link href="/contact" className="hover:text-blue-600 mr-8 font-bold">
                Contacts
              </Link>
              <LogoutButton />
            </>
            ):(
            <>
              <Link href="/login" className="hover:text-blue-600 mr-6 font-bold">
                Login
              </Link>
              <Link href="/register" className="hover:text-blue-600 font-bold">
                Register
              </Link>
            </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
