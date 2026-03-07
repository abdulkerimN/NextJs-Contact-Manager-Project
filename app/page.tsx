// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Contact Manager
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your contacts efficiently and effortlessly.
        </p>
        <a
          href="/contact"
          className="mt-10px px-6 py-3 bg-blue-600  text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Get Started
        </a>
        <img
          src="/contacts.jpg"
          alt="contact manager"
          // width={200}
          // height={200}
          className="rounded-lg shadow-lg mt-5 w-full max-w-md"
        />
      </div>

      <div>
        <p className="text-lg text-gray-600 mb-8">
          Start Managing Your Contacts today !
        </p>
      </div>
    </div>
  );
}
