import dayjs from "dayjs";

export const generateInsights = (entries) => {
  if (entries.length < 7) return [];
  let insights = [];

  const sleepAvg = entries.reduce((sum, e) => sum + e.sleep, 0) / entries.length;
  const stressAvg = entries.reduce((sum, e) => sum + e.stress, 0) / entries.length;

  if (sleepAvg >= 8) insights.push("You focus better after 8+ hours of sleep.");
  if (stressAvg < 3) insights.push("Your low-stress days correlate with longer breaks.");

  return insights;
};

export const calculateStreak = (entries) => {
  if (!entries.length) return 0;
  const today = dayjs();
  let streak = 0;

  for (let i = entries.length - 1; i >= 0; i--) {
    const entryDate = dayjs(entries[i].date);
    if (today.diff(entryDate, "day") === streak) streak++;
    else break;
  }
  return streak;
};
