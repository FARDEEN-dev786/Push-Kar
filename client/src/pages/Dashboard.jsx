import Navbar from "../components/Navbar";
import ScoreCard from "../components/ScoreCard";
import StatCard from "../components/StatCard";
import AIInsightCard from "../components/AIInsightCard";
import TaskList from "../components/TaskList";
import WeeklyChart from "../components/WeeklyChart";

import { Smile, Zap, Clock } from "lucide-react";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          <ScoreCard
            score={84}
            change="+6 from yesterday"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Mood"
              value="Happy 😊"
              icon={<Smile size={30} />}
            />

            <StatCard
              title="Energy"
              value="8 / 10"
              icon={<Zap size={30} />}
            />

            <StatCard
              title="Focus"
              value="5.6 hrs"
              icon={<Clock size={30} />}
            />
          </div>

          <TaskList />
          <WeeklyChart />

        </div>

        {/* RIGHT COLUMN */}
        <div>

          <AIInsightCard />

        </div>

      </div>
    </>
  );
}

export default Dashboard;