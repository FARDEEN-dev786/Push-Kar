export function generateWeeklyReport(history) {
  if (!history.length) return null;

  const last7 = history.slice(-7);

  const average = (key) =>
    (
      last7.reduce((sum, day) => sum + Number(day[key] || 0), 0) /
      last7.length
    ).toFixed(1);

  const totalStudy = last7.reduce(
    (sum, day) => sum + Number(day.study || 0),
    0
  );

  const scores = last7.map((d) => d.score);

  const bestScore = Math.max(...scores);

  const bestDay = last7.find((d) => d.score === bestScore);

  return {
    averageScore: average("score"),
    averageSleep: average("sleep"),
    averageMood: average("mood"),
    averageEnergy: average("energy"),
    averageWater: average("water"),
    totalStudy,
    bestDay,
    bestScore,
  };
}