import { logoutAction } from "../actions/auth";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
      >
        Logout
      </button>
    </form>
  );
}