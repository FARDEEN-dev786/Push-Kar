function ScoreCard({ score, change }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
      <p className="text-gray-400 text-sm">
        Performance Score
      </p>

      <h1 className="text-5xl font-bold mt-4">
        {score}
      </h1>

      <p className="text-green-400 mt-2">
        {change}
      </p>
    </div>
  );
}

export default ScoreCard;