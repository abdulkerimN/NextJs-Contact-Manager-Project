
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-full max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Welcome to Contact Manager
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          Manage your contacts efficiently and effortlessly.
        </p>

        <Link
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Get Started
        </Link>

        <div className="relative mt-8 aspect-3/2 w-full">
          <Image
            src="/contacts.jpg"
            alt="Contact Manager illustration"
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        <p className="mt-6 text-lg text-gray-600">
          Start managing your contacts today!
        </p>
      </div>
    </div>
  );
}
