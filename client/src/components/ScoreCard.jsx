import { TrendingUp } from "lucide-react";

function ScoreCard({ score, change }) {
  const safeScore = Math.min(Math.max(Number(score) || 0, 0), 100);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Decorative glow */}
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--pk-primary)] opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20" />

      <div className="absolute -bottom-24 right-20 h-32 w-32 rounded-full bg-[var(--pk-secondary)] opacity-10 blur-3xl" />

      <div className="relative">

        {/* Header */}
        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-medium text-[var(--pk-text-muted)]">
              Performance Score
            </p>

            <div className="mt-3 flex items-baseline gap-2">
              <h1 className="text-5xl font-bold tracking-tight">
                {safeScore}
              </h1>

              <span className="text-sm text-[var(--pk-text-muted)]">
                / 100
              </span>
            </div>
          </div>

          {/* Score icon */}
          <div className="rounded-2xl bg-[var(--pk-primary)]/10 p-3 text-[var(--pk-primary)]">
            <TrendingUp size={24} />
          </div>

        </div>


        {/* Progress */}
        <div className="mt-6">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-xs text-[var(--pk-text-muted)]">
              Today's performance
            </span>

            <span className="text-xs font-semibold text-[var(--pk-primary)]">
              {safeScore}%
            </span>

          </div>

          <div className="h-2.5 overflow-hidden rounded-full bg-[var(--pk-surface-soft)]">

            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--pk-primary)] to-[var(--pk-secondary)] transition-all duration-700"
              style={{
                width: `${safeScore}%`,
              }}
            />

          </div>

        </div>


        {/* Footer */}
        <div className="mt-5 flex items-center gap-2">

          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--pk-primary)]/10 text-[var(--pk-primary)]">
            <TrendingUp size={13} />
          </div>

          <p className="text-xs text-[var(--pk-text-muted)]">
            {change}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ScoreCard;