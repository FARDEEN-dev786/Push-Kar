import { getPerformanceHistory } from "./historyStorage";

function getDateOnly(date) {
    return new Date(date + "T00:00:00");
}

function getWeekStart(date) {
    const result = new Date(date);
    const day = result.getDay();

    const difference = day === 0 ? -6 : 1 - day;

    result.setDate(result.getDate() + difference);
    result.setHours(0, 0, 0, 0);

    return result;
}

function getWeekEntries(history, weekStart) {
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);

    return history.filter((entry) => {
        const entryDate = getDateOnly(entry.date);

        return (
            entryDate >= weekStart &&
            entryDate < weekEnd
        );
    });
}

function average(entries, key) {
    if (!entries.length) return 0;

    const total = entries.reduce(
        (sum, entry) => sum + Number(entry[key] || 0),
        0
    );

    return total / entries.length;
}

function total(entries, key) {
    return entries.reduce(
        (sum, entry) => sum + Number(entry[key] || 0),
        0
    );
}

export function getWeeklyComparison() {
    const history = getPerformanceHistory();

    const today = new Date();

    const currentWeekStart = getWeekStart(today);

    const previousWeekStart = new Date(currentWeekStart);
    previousWeekStart.setDate(
        previousWeekStart.getDate() - 7
    );

    const currentWeek = getWeekEntries(
        history,
        currentWeekStart
    );

    const previousWeek = getWeekEntries(
        history,
        previousWeekStart
    );

    return {
        current: {
            score: average(currentWeek, "score"),
            sleep: average(currentWeek, "sleep"),
            mood: average(currentWeek, "mood"),
            energy: average(currentWeek, "energy"),
            water: average(currentWeek, "water"),
            study: total(currentWeek, "study"),
            focus: total(currentWeek, "focus"),
            exercise: currentWeek.filter(
                (entry) => entry.exercise
            ).length,
        },

        previous: {
            score: average(previousWeek, "score"),
            sleep: average(previousWeek, "sleep"),
            mood: average(previousWeek, "mood"),
            energy: average(previousWeek, "energy"),
            water: average(previousWeek, "water"),
            study: total(previousWeek, "study"),
            focus: total(previousWeek, "focus"),
            exercise: previousWeek.filter(
                (entry) => entry.exercise
            ).length,
        },
    };
}