function StatCard({ title, value, icon }) {
  return (
    <div className="group rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-medium text-[var(--pk-text-muted)]">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-[var(--pk-primary)]/10 p-3 text-[var(--pk-primary)] transition-transform duration-200 group-hover:scale-110">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;