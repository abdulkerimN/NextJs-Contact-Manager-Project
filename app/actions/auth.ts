"use server";

import { UserType } from "../_types/user";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    // Encode email safely
    const params = new URLSearchParams({ email });

    const res = await fetch(`${API_URL}/users?${params.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }

    const users: UserType[] = await res.json();
    const user = users[0];

    // Check email exists AND password matches
    if (!user || user.password !== password) {
      throw new Error("Invalid credentials");
    }
    await setSession({
      name: user.name,
      email: user.email,
      id: user.id,
      password: user.password,
    });


    // TODO: Set cookie here if needed
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Invalid credentials");
  }

  redirect("/contact");
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
