import { getWeeklyComparison } from "../utils/weeklyComparison";

function WeeklyComparison() {
    const { current, previous } = getWeeklyComparison();

    const metrics = [
        {
            label: "Average Score",
            current: current.score,
            previous: previous.score,
            suffix: "",
            decimals: 0,
        },
        {
            label: "Average Sleep",
            current: current.sleep,
            previous: previous.sleep,
            suffix: " hrs",
            decimals: 1,
        },
        {
            label: "Average Mood",
            current: current.mood,
            previous: previous.mood,
            suffix: "/10",
            decimals: 1,
        },
        {
            label: "Average Energy",
            current: current.energy,
            previous: previous.energy,
            suffix: "/10",
            decimals: 1,
        },
        {
            label: "Water",
            current: current.water,
            previous: previous.water,
            suffix: " L",
            decimals: 1,
        },
        {
            label: "Study",
            current: current.study,
            previous: previous.study,
            suffix: " hrs",
            decimals: 1,
        },
        {
            label: "Focus",
            current: current.focus,
            previous: previous.focus,
            suffix: " hrs",
            decimals: 1,
        },
        {
            label: "Exercise Days",
            current: current.exercise,
            previous: previous.exercise,
            suffix: "",
            decimals: 0,
        },
    ];

    return (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mt-6">

            <h2 className="text-2xl font-bold mb-2">
                📊 Week vs Previous Week
            </h2>

            <p className="text-gray-400 mb-6">
                See how your performance is changing over time.
            </p>

            <div className="space-y-4">

                {metrics.map((metric) => {

                    const difference =
                        metric.current - metric.previous;

                    const improved = difference > 0;
                    const declined = difference < 0;

                    return (
                        <div
                            key={metric.label}
                            className="bg-slate-900 rounded-xl p-4"
                        >

                            <div className="flex justify-between items-center">

                                <div>
                                    <p className="text-gray-400">
                                        {metric.label}
                                    </p>

                                    <p className="text-xl font-bold mt-1">
                                        {metric.current.toFixed(
                                            metric.decimals
                                        )}
                                        {metric.suffix}
                                    </p>
                                </div>

                                <div className="text-right">

                                    <p className="text-gray-500 text-sm">
                                        Previous:{" "}
                                        {metric.previous.toFixed(
                                            metric.decimals
                                        )}
                                        {metric.suffix}
                                    </p>

                                    <p
                                        className={
                                            improved
                                                ? "text-green-400 font-semibold"
                                                : declined
                                                ? "text-red-400 font-semibold"
                                                : "text-gray-400 font-semibold"
                                        }
                                    >
                                        {improved
                                            ? "↑"
                                            : declined
                                            ? "↓"
                                            : "→"}{" "}
                                        {Math.abs(
                                            difference
                                        ).toFixed(
                                            metric.decimals
                                        )}
                                    </p>

                                </div>

                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default WeeklyComparison;