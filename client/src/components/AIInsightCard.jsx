import { Sparkles } from "lucide-react";

function AIInsightCard() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 mt-6 shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <Sparkles />
        <h2 className="text-xl font-bold">
          Push-Kar AI Insight
        </h2>
      </div>

      <p className="text-slate-100">
        You're usually most productive between
        <span className="font-bold"> 9:00 AM and 11:00 AM.</span>
        Schedule your hardest tasks during this window.
      </p>
    </div>
  );
}

export default AIInsightCard;