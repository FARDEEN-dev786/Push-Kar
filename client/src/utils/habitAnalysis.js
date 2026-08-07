export function analyzeHabits(history) {
  if (history.length < 3) {
    return {
      message:
        "Not enough data yet. Keep checking in every day to unlock personalized insights!",
    };
  }

  const goodSleep = history.filter(
    (d) => Number(d.sleep) >= 7
  );

  const badSleep = history.filter(
    (d) => Number(d.sleep) < 7
  );

  const averageFocus = (arr) =>
    arr.length
      ? (
          arr.reduce(
            (sum, day) => sum + Number(day.focus || 0),
            0
          ) / arr.length
        ).toFixed(1)
      : 0;

  const focusGoodSleep = averageFocus(goodSleep);
  const focusBadSleep = averageFocus(badSleep);

  if (focusGoodSleep > focusBadSleep) {
    return {
      message: `You focus better after getting at least 7 hours of sleep. Average focus: ${focusGoodSleep} hrs vs ${focusBadSleep} hrs.`,
    };
  }

  return {
    message:
      "Keep logging your habits to discover meaningful patterns.",
  };
}