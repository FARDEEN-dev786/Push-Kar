export function savePerformanceHistory(entry) {
    const history =
        JSON.parse(localStorage.getItem("performanceHistory")) || [];

    const today = new Date().toISOString().split("T")[0];

    const updatedEntry = {
        ...entry,
        date: today,
        updatedAt: new Date().toISOString(),
    };

    const existingIndex = history.findIndex(
        (item) => item.date === today
    );

    if (existingIndex !== -1) {
        // Update today's existing check-in
        history[existingIndex] = updatedEntry;
    } else {
        // Create a new check-in for today
        history.push(updatedEntry);
    }

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