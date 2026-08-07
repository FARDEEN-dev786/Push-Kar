export function calculateStreak(history) {
  if (!history.length) {
    return {
      current: 0,
      longest: 0,
    };
  }

  // Sort by date
  const sorted = [...history].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  let longest = 1;
  let current = 1;

  for (let i = 1; i < sorted.length; i++) {
    const previous = new Date(sorted[i - 1].date);
    const today = new Date(sorted[i].date);

    const diff =
      (today - previous) / (1000 * 60 * 60 * 24);

    if (diff <= 1.5) {
      current++;
      longest = Math.max(longest, current);
    } else {
      current = 1;
    }
  }

  return {
    current,
    longest,
  };
}