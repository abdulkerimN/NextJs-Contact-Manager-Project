"use client";

import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import type { ContactType } from "../_types/contact";
import { deleteContactAction } from "../actions/contact";

type DeleteButtonProps = {
  contact: ContactType;
};

export default function DeleteButton({ contact }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = confirm(
      `Are you sure you want to delete ${contact.name}?`
    );

    if (!confirmed) return;

    try {
      setIsDeleting(true);

      await deleteContactAction(contact.id);
    } catch (error) {
      console.error("Failed to delete contact:", error);
      alert("Failed to delete contact. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isDeleting}
      className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 active:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <FiTrash2 className="text-lg" />
      <span>{isDeleting ? "Deleting..." : "Delete"}</span>
    </button>
  );
}