import { getPerformanceHistory } from "../utils/historyStorage";
import { generateWeeklyReport } from "../utils/reportGenerator";

function WeeklyReport() {
  const history = getPerformanceHistory();
  const report = generateWeeklyReport(history);

  if (!report) {
    return (
      <div className="bg-slate-800 rounded-2xl p-6">
        No weekly data available.
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <h2 className="text-2xl font-bold mb-6">
        📅 Weekly Report
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <ReportItem
          label="Average Score"
          value={`${report.averageScore}/100`}
        />

        <ReportItem
          label="Average Sleep"
          value={`${report.averageSleep} hrs`}
        />

        <ReportItem
          label="Average Mood"
          value={`${report.averageMood}/10`}
        />

        <ReportItem
          label="Average Energy"
          value={`${report.averageEnergy}/10`}
        />

        <ReportItem
          label="Average Water"
          value={`${report.averageWater} L`}
        />

        <ReportItem
          label="Study Hours"
          value={`${report.totalStudy} hrs`}
        />

        <ReportItem
          label="Best Score"
          value={report.bestScore}
        />

      </div>
    </div>
  );
}

function ReportItem({ label, value }) {
  return (
    <div className="bg-slate-900 rounded-xl p-4">
      <p className="text-gray-400">{label}</p>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default WeeklyReport;