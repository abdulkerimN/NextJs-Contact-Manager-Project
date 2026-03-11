import { FiTrash2 } from "react-icons/fi";
import { ContactType } from "../_types/contact";

type DeleteButtonProps = {
contact?: ContactType;
}
export default function DeleteButton({ contact }: DeleteButtonProps) {
  return (
    <form method="post">
      <button
        type="submit"
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 transition-colors rounded-md hover:bg-red-50 active:bg-red-100 cursor-pointer"
        onClick={(e)=>{
if(!confirm("Are you sure you want to delete this contact?")){
  e.preventDefault();}
}}      
>
        <FiTrash2 className="text-lg" />
        <span>Delete</span>
      </button>
    </form>
  );
}
