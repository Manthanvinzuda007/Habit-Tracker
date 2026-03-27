export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const generateDateKey = (year, month, day) => {
  const m = String(month + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
};

export const calculateDailyScores = (habits, year, month, daysInMonth) => {
  const scores = [];
  const maxScorePerDay = habits.length;

  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = generateDateKey(year, month, day);
    let completedCount = 0;

    habits.forEach(habit => {
      if (habit.records[dateKey]) completedCount++;
    });

    // Normalize to 0-10 scale
    const score = maxScorePerDay === 0 ? 0 : Math.round((completedCount / maxScorePerDay) * 10 * 10) / 10;
    scores.push({ day: String(day), score });
  }
  
  return scores;
};