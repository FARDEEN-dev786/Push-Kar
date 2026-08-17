export function compareGoals(goals, performanceData) {
  return goals.map((goal) => {
    const actual = performanceData[goal.type];

    // Exercise is a yes/no goal
    if (goal.type === "exercise") {
      const completed = Boolean(actual);

      return {
        ...goal,
        actual: completed,
        progress: completed ? 100 : 0,
        status: completed ? "success" : "fail",
        message: completed
          ? "Goal achieved"
          : "Exercise not completed",
      };
    }

    const target = Number(goal.target);
    const actualValue = Number(actual || 0);

    // Avoid invalid or zero targets
    const progress =
      target > 0
        ? Math.min((actualValue / target) * 100, 100)
        : 0;

    const difference = actualValue - target;

    let status = "";
    let message = "";

    if (difference >= 0) {
      status = "success";
      message = "Goal achieved";
    } else if (difference >= -1) {
      status = "warning";
      message = `Missed by ${Math.abs(difference).toFixed(1)}`;
    } else {
      status = "fail";
      message = `Missed by ${Math.abs(difference).toFixed(1)}`;
    }

    return {
      ...goal,
      actual: actualValue,
      progress: Math.round(progress),
      status,
      message,
    };
  });
}