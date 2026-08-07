export function savePerformanceHistory(entry) {
  const history =
    JSON.parse(localStorage.getItem("performanceHistory")) || [];

  history.push({
    ...entry,
    date: new Date().toISOString(),
  });

  localStorage.setItem(
    "performanceHistory",
    JSON.stringify(history)
  );
}

export function getPerformanceHistory() {
  return (
    JSON.parse(localStorage.getItem("performanceHistory")) || []
  );
}