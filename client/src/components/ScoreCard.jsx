function ScoreCard({ score, change }) {
  const percentage = Math.min(Math.max(Number(score), 0), 100);

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">

      {/* Header */}
      <div className="flex justify-between items-start">

        <div>
          <p className="text-gray-400 text-sm">
            Performance Score
          </p>

          <p className="text-gray-500 text-xs mt-1">
            Based on today's check-in
          </p>
        </div>

        <span className="text-xs font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full">
          Daily
        </span>

      </div>


      {/* Score */}
      <div className="flex items-end gap-2 mt-5">

        <h1 className="text-6xl font-bold tracking-tight">
          {score}
        </h1>

        <span className="text-gray-400 text-lg mb-2">
          /100
        </span>

      </div>


      {/* Progress Bar */}
      <div className="mt-5">

        <div className="h-3 bg-slate-900 rounded-full overflow-hidden">

          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />

        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>0</span>
          <span>100</span>
        </div>

      </div>


      {/* Status */}
      <div className="mt-5 pt-4 border-t border-slate-700">

        <p className="text-cyan-300 text-sm">
          {change}
        </p>

      </div>

    </div>
  );
}

export default ScoreCard;