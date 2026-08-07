export function calculateScore(data) {
  let score = 0;

  // Sleep (20 points)
  const sleep = Number(data.sleep);
  if (sleep >= 7 && sleep <= 9) {
    score += 20;
  } else if (sleep >= 6) {
    score += 10;
  }

  // Mood (15 points)
  score += (Number(data.mood) / 10) * 15;

  // Energy (15 points)
  score += (Number(data.energy) / 10) * 15;

  // Focus (20 points)
  const focus = Number(data.focus);
  score += Math.min((focus / 6) * 20, 20);

  // Study (15 points)
  const study = Number(data.study);
  score += Math.min((study / 4) * 15, 15);

  // Water (10 points)
  const water = Number(data.water);
  score += Math.min((water / 3) * 10, 10);

  // Exercise (5 points)
  if (data.exercise) {
    score += 5;
  }

  return Math.round(score);
}