import Navbar from "../components/Navbar";
import ScoreCard from "../components/ScoreCard";
import StatCard from "../components/StatCard";
import AIInsightCard from "../components/AIInsightCard";
import TaskList from "../components/TaskList";
import WeeklyChart from "../components/WeeklyChart";
import TodaySummary from "../components/TodaySummary";

import { useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";

import { Smile, Zap, Clock } from "lucide-react";

function Dashboard() {
  const { performanceData } = useContext(PerformanceContext);
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          <ScoreCard
            score={performanceData.score}
            change="Calculated from today's check-in"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Mood"
              value={`${performanceData.mood}/10`}
              icon={<Smile size={30} />}
            />

            <StatCard
              title="Energy"
              value={`${performanceData.energy}/10`}
              icon={<Zap size={30} />}
            />

            <StatCard
              title="Focus"
              value={`${performanceData.focus} hrs`}
              icon={<Clock size={30} />}
            />
          </div>

          <TaskList />
          <WeeklyChart />

        </div>

        {/* RIGHT COLUMN */}
        <div>

          <AIInsightCard />
          <TodaySummary />

        </div>

      </div>
    </>
  );
}

export default Dashboard;