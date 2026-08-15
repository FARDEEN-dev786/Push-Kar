import Navbar from "../components/Navbar";
import ScoreCard from "../components/ScoreCard";
import StatCard from "../components/StatCard";
import AIInsightCard from "../components/AIInsightCard";
import TaskList from "../components/TaskList";
import WeeklyChart from "../components/WeeklyChart";
import TodaySummary from "../components/TodaySummary";
import GoalComparison from "../components/GoalComparison";

import { useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";

import { Smile, Zap, Clock } from "lucide-react";

function Dashboard() {
  const { performanceData } = useContext(PerformanceContext);

  return (
    <div className="min-h-screen bg-[var(--pk-background)] text-[var(--pk-text)]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-[var(--pk-text-muted)] mt-1">
            Your daily performance at a glance.
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">

            {/* Performance Score */}
            <ScoreCard
              score={performanceData.score}
              change="Calculated from today's check-in"
            />

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

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

            {/* Tasks */}
            <TaskList />

            {/* Weekly Performance */}
            <WeeklyChart />

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* AI Insight */}
            <AIInsightCard />

            {/* Today's Summary */}
            <TodaySummary />

            {/* Goal Progress */}
            <GoalComparison />

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;