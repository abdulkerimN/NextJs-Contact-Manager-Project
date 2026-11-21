import { cookies } from "next/headers";
import { UserType } from "../_types/user";

export const setSession = async (user: UserType) => {
  const cookieStore = await cookies();

  const sessionUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  cookieStore.set("session", JSON.stringify(sessionUser), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
};

export const getSession = async (): Promise<UserType | null> => {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return null;

  try {
    return JSON.parse(session) as UserType;
  } catch {
    return null;
  }
};

export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session");
};