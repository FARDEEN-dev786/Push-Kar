import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="flex justify-between items-center mb-8">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-[var(--pk-text-muted)] mt-1">
          Welcome back 👋
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">

        <button
          className="rounded-xl p-2 text-[var(--pk-text-muted)] transition hover:bg-[var(--pk-surface)] hover:text-[var(--pk-text)]"
          aria-label="Search"
        >
          <Search size={22} />
        </button>

        <button
          className="rounded-xl p-2 text-[var(--pk-text-muted)] transition hover:bg-[var(--pk-surface)] hover:text-[var(--pk-text)]"
          aria-label="Notifications"
        >
          <Bell size={22} />
        </button>

        {/* Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--pk-primary)] to-[var(--pk-secondary)] font-bold text-white shadow-lg">
          F
        </div>

      </div>

    </header>
  );
}

export default Navbar;