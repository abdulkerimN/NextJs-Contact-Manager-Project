
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Contact Manager",
  description:
    "Manage, organize, and keep track of your contacts easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <Navbar />

          <main className="container mx-auto w-full max-w-6xl px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
