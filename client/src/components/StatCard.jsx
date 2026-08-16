import { ArrowUpRight } from "lucide-react";

function StatCard({ title, value, icon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">

      {/* Subtle hover glow */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--pk-primary)] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-15" />

      <div className="relative flex items-center justify-between">

        {/* Text */}
        <div>
          <p className="text-sm font-medium text-[var(--pk-text-muted)]">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            {value}
          </h2>
        </div>

        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--pk-primary)]/10 text-[var(--pk-primary)] transition-transform duration-200 group-hover:scale-105">
          {icon}
        </div>

      </div>

      {/* Bottom indicator */}
      <div className="relative mt-4 flex items-center gap-1 text-xs font-medium text-[var(--pk-text-muted)]">
        <ArrowUpRight
          size={14}
          className="text-[var(--pk-secondary)]"
        />

        <span>Today's metric</span>
      </div>

    </div>
  );
}

export default StatCard;