import { getPerformanceHistory } from "../utils/historyStorage";

function MonthlyReport() {
  const history = getPerformanceHistory();

  const month = history.slice(-30);

  if (!month.length) {
    return (
      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
        No monthly data available.
      </div>
    );
  }

  const average = (key) =>
    (
      month.reduce((sum, day) => sum + Number(day[key] || 0), 0) /
      month.length
    ).toFixed(1);

  const totalStudy = month.reduce(
    (sum, day) => sum + Number(day.study || 0),
    0
  );

  const exerciseDays = month.filter(
    (d) => d.exercise
  ).length;

  const bestDay = month.reduce((best, day) =>
    day.score > best.score ? day : best
  );

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 ">
      <h2 className="text-2xl font-bold mb-6">
        📅 Monthly Report
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <Card title="Average Score" value={average("score")} />

        <Card title="Average Sleep" value={`${average("sleep")} hrs`} />

        <Card title="Average Mood" value={`${average("mood")}/10`} />

        <Card title="Study Hours" value={`${totalStudy} hrs`} />

        <Card title="Exercise Days" value={exerciseDays} />

        <Card title="Best Score" value={bestDay.score} />

      </div>

    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-slate-900 rounded-xl p-4">
      <p className="text-gray-400">{title}</p>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default MonthlyReport;