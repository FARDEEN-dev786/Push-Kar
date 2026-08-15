import { Sparkles, ArrowUpRight } from "lucide-react";

function AIInsightCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Decorative gradient glow */}
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--pk-secondary)] opacity-15 blur-3xl" />

      <div className="absolute -bottom-20 -left-10 h-36 w-36 rounded-full bg-[var(--pk-primary)] opacity-15 blur-3xl" />

      <div className="relative">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-gradient-to-br from-[var(--pk-primary)] to-[var(--pk-secondary)] p-2.5 text-white shadow-lg">
              <Sparkles size={20} />
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Push-Kar AI
              </h2>

              <p className="text-xs text-[var(--pk-text-muted)]">
                Today's insight
              </p>
            </div>

          </div>

          <div className="rounded-full bg-[var(--pk-primary)]/10 px-2.5 py-1 text-xs font-medium text-[var(--pk-primary-soft)]">
            AI
          </div>

        </div>


        {/* Insight */}
        <div className="mt-6">

          <p className="text-sm leading-6 text-[var(--pk-text)]">
            You're usually most productive between{" "}
            <span className="font-semibold text-[var(--pk-secondary)]">
              9:00 AM and 11:00 AM
            </span>
            . Schedule your hardest tasks during this window.
          </p>

        </div>


        {/* Action / hint */}
        <div className="mt-5 flex items-center justify-between border-t border-[var(--pk-border)] pt-4">

          <span className="text-xs text-[var(--pk-text-muted)]">
            Based on your activity patterns
          </span>

          <ArrowUpRight
            size={17}
            className="text-[var(--pk-primary)]"
          />

        </div>

      </div>

    </div>
  );
}

export default AIInsightCard;