import { Sparkles, Lightbulb } from "lucide-react";

function AIInsightCard() {
  return (
    <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-3">

          <div className="bg-white/15 p-2 rounded-xl">
            <Sparkles size={20} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Push-Kar AI Insight
            </h2>

            <p className="text-cyan-100 text-xs mt-0.5">
              Personalized observation
            </p>
          </div>

        </div>

        <Lightbulb
          size={20}
          className="text-cyan-100"
        />

      </div>


      {/* Insight */}
      <div className="bg-black/10 rounded-xl p-4">

        <p className="text-slate-100 leading-relaxed">
          You're usually most productive between
          <span className="font-bold">
            {" "}9:00 AM and 11:00 AM.
          </span>
          {" "}Schedule your hardest tasks during this window.
        </p>

      </div>

    </div>
  );
}

export default AIInsightCard;