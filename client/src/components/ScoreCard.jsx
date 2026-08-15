function ScoreCard({ score, change }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Decorative gradient */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--pk-primary)] opacity-20 blur-3xl" />

      <div className="relative">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[var(--pk-text-muted)]">
              Performance Score
            </p>

            <p className="mt-1 text-xs text-[var(--pk-text-muted)]">
              Based on today's check-in
            </p>
          </div>

          <div className="rounded-full bg-[var(--pk-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--pk-primary-soft)]">
            Today
          </div>
        </div>

        {/* Score */}
        <div className="mt-6 flex items-end gap-3">

          <h1 className="text-6xl font-bold tracking-tight">
            {score}
          </h1>

          <span className="mb-2 text-sm text-[var(--pk-text-muted)]">
            / 100
          </span>

        </div>

        {/* Progress */}
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--pk-surface-soft)]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[var(--pk-primary)] to-[var(--pk-secondary)] transition-all duration-500"
            style={{
              width: `${Math.min(Math.max(score, 0), 100)}%`,
            }}
          />
        </div>

        {/* Change message */}
        <p className="mt-3 text-sm text-[var(--pk-text-muted)]">
          {change}
        </p>

      </div>
    </div>
  );
}

export default ScoreCard;