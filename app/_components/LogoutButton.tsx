'use client';
import React from "react";
import { redirect } from "next/navigation";
import { logoutAction } from "../actions/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
const Router= useRouter();
const handleLogout = async () => {
try {
    await logoutAction();
// the redirect happens in the server action
// this client-side redirect is a fallback
    // redirect("/login");
  Router.push("/login");
  Router.refresh();
} catch (error) {
  console.log("logout failed: ", error);
}
};
  return <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer" onClick={handleLogout}>Logout</button>;
}
