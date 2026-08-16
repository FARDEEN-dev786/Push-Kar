function getLocalDate(date) {
    const d = new Date(date);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function dateToNumber(dateString) {
    const [year, month, day] = dateString
        .split("-")
        .map(Number);

    return Date.UTC(year, month - 1, day);
}


export function calculateStreak(history) {
    if (!history || history.length === 0) {
        return 0;
    }

    // Get unique dates and sort newest → oldest
    const dates = [
        ...new Set(
            history
                .map((entry) => getLocalDate(entry.date))
                .filter(Boolean)
        ),
    ].sort(
        (a, b) => dateToNumber(b) - dateToNumber(a)
    );

    if (dates.length === 0) {
        return 0;
    }

    const today = getLocalDate(new Date());
    const yesterday = getLocalDate(
        new Date(Date.now() - 24 * 60 * 60 * 1000)
    );

    // A streak must include today or yesterday.
    if (dates[0] !== today && dates[0] !== yesterday) {
        return 0;
    }

    let streak = 1;

    for (let i = 1; i < dates.length; i++) {
        const previousDate = dateToNumber(dates[i - 1]);
        const currentDate = dateToNumber(dates[i]);

        const difference =
            (previousDate - currentDate) /
            (24 * 60 * 60 * 1000);

        if (difference === 1) {
            streak++;
        } else {
            break;
        }
    }

    return streak;
}