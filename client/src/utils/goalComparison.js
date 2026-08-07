export function compareGoals(goals, performanceData) {
  return goals.map((goal) => {
    const actual = performanceData[goal.type];

    let status = "";
    let message = "";

    if (goal.type === "exercise") {
      status = actual ? "success" : "fail";
      message = actual
        ? "Completed"
        : "Exercise not completed";

      return {
        ...goal,
        actual,
        status,
        message,
      };
    }

    const difference = Number(actual) - Number(goal.target);

    if (difference >= 0) {
      status = "success";
      message = "Goal Achieved";
    } else if (difference >= -1) {
      status = "warning";
      message = `Missed by ${Math.abs(difference)}`;
    } else {
      status = "fail";
      message = `Missed by ${Math.abs(difference)}`;
    }

    return {
      ...goal,
      actual,
      status,
      message,
    };
  });
}