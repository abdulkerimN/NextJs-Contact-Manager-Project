import Link from "next/link";

export default function Navbar() {
// const session= true
  return (
    <div>
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Contact Manager
          </Link>
          <div className="flex items-center space-x-4">   
           </div>
        </div>
      </nav>    
    </div>
  )
}
