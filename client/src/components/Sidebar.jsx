import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  BarChart3,
  Target,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    icon: <LayoutDashboard size={20} />,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <CheckSquare size={20} />,
    label: "Daily Check-In",
    path: "/checkin",
  },
  {
    icon: <BarChart3 size={20} />,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: <Target size={20} />,
    label: "Goals",
    path: "/goals",
  },
  {
    icon: <Settings size={20} />,
    label: "Settings",
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-[var(--pk-border)] bg-[var(--pk-sidebar)] p-5">

      {/* Logo */}
      <div className="px-2 pt-2">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--pk-primary)]">
          Push-Kar
        </h1>

        <p className="mt-1 text-sm text-[var(--pk-text-muted)]">
          Your AI Performance Coach
        </p>
      </div>


      {/* Navigation */}
      <nav className="mt-10 flex-1 space-y-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[var(--pk-primary)] text-white shadow-lg shadow-[var(--pk-primary)]/20"
                  : "text-[var(--pk-text-muted)] hover:bg-[var(--pk-surface)] hover:text-[var(--pk-text)]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`transition-transform duration-200 ${
                    isActive
                      ? "scale-105"
                      : "group-hover:scale-110"
                  }`}
                >
                  {item.icon}
                </span>

                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}

      </nav>


      {/* Bottom decoration */}
      <div className="rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-4">

        <p className="text-xs font-medium text-[var(--pk-text-muted)]">
          Your productivity journey
        </p>

        <p className="mt-2 text-sm font-semibold">
          Keep pushing forward 🚀
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;