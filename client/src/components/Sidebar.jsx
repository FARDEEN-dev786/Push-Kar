import {
  LayoutDashboard,
  CheckSquare,
  BarChart3,
  Target,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
  { icon: <CheckSquare size={20} />, label: "Daily Check-in" },
  { icon: <BarChart3 size={20} />, label: "Analytics" },
  { icon: <Target size={20} />, label: "Goals" },
  { icon: <Settings size={20} />, label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-cyan-400">
        Push-Kar
      </h1>

      <p className="text-sm text-gray-400 mt-1">
        Your AI Performance Coach
      </p>

      <nav className="mt-10 space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-700 transition"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;