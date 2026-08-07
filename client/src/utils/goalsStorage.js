export function getGoals() {
  return JSON.parse(localStorage.getItem("goals")) || [];
}

export function saveGoals(goals) {
  localStorage.setItem("goals", JSON.stringify(goals));
}