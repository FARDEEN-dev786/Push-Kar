import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-400">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Search className="cursor-pointer" />
        <Bell className="cursor-pointer" />

        <div className="bg-cyan-500 h-10 w-10 rounded-full flex items-center justify-center font-bold">
          F
        </div>
      </div>
    </div>
  );
}

export default Navbar;