// use client component
"use client" 
export default function LoginForm() {
  return (
   <form action="" className="space-x-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input 
        type="email" 
        name="email" 
        placeholder=" enter ur email" 
        required 
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
/>
    </div>
   </form>
  )
}
