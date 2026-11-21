
"use server";

import type { UserType } from "../_types/user";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

// REGISTER
export const registerAction = async (formData: FormData) => {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  // Basic validation
  if (!name || !email || password.length < 6) {
    redirect("/register?error=invalid");
  }

  try {
    // Check whether the email already exists
    const params = new URLSearchParams({ email });

    const checkResponse = await fetch(
      `${API_URL}/users?${params.toString()}`,
      { cache: "no-store" }
    );

    if (!checkResponse.ok) {
      redirect("/register?error=server");
    }

    const users: UserType[] = await checkResponse.json();

    if (users.length > 0) {
      redirect("/register?error=exists");
    }

    // Create the new user
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      redirect("/register?error=server");
    }

    const newUser: UserType = await response.json();

    // Automatically log in the newly registered user
    await setSession({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    // Redirect errors are handled by Next.js
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error;
    }

    console.error("Registration error:", error);
    redirect("/register?error=server");
  }

  redirect("/contact");
};

// LOGIN
export const loginAction = async (formData: FormData) => {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  try {
    const params = new URLSearchParams({ email });

    const res = await fetch(`${API_URL}/users?${params.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }

    const users: UserType[] = await res.json();
    const user = users[0];

    if (!user || user.password !== password) {
      redirect("/login?error=invalid");
    }

    await setSession({
      name: user.name,
      email: user.email,
      id: user.id,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error;
    }

    console.error("Login error:", error);
    redirect("/login?error=invalid");
  }

  redirect("/contact");
};

// LOGOUT
export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
