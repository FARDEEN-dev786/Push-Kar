const HISTORY_KEY = "performanceHistory";

// Get today's date in the user's local timezone.
// Format: YYYY-MM-DD
function getLocalDate() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


// Save or update today's performance
export function savePerformanceHistory(entry) {
    const history = getPerformanceHistory();

    const today = getLocalDate();

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
        history[existingIndex] = {
            ...history[existingIndex],
            ...updatedEntry,
        };
    } else {
        // Create a new check-in for today
        history.push(updatedEntry);
    }

    // Keep history ordered from oldest → newest
    history.sort(
        (a, b) =>
            new Date(a.date).getTime() -
            new Date(b.date).getTime()
    );

    localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(history)
    );
}


// Get all performance history
export function getPerformanceHistory() {
    try {
        const stored = localStorage.getItem(HISTORY_KEY);

        if (!stored) {
            return [];
        }

        const history = JSON.parse(stored);

        return Array.isArray(history)
            ? history
            : [];
    } catch (error) {
        console.error(
            "Failed to load performance history:",
            error
        );

        return [];
    }
}


// Get today's performance entry
export function getTodayPerformance() {
    const history = getPerformanceHistory();
    const today = getLocalDate();

    return (
        history.find(
            (item) => item.date === today
        ) || null
    );
}