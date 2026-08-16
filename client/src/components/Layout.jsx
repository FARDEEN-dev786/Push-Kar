import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--pk-background)] text-[var(--pk-text)]">

      <Sidebar />

      <main className="ml-64 min-h-screen p-8">
        {children}
      </main>

    </div>
  );
}

export default Layout;