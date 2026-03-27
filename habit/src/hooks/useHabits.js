import { useState, useEffect, useCallback } from 'react';

export const useHabits = () => {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('habit_tracker_data');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('habit_tracker_data', JSON.stringify(habits));
  }, [habits]);

  const addHabit = useCallback((name) => {
    if (!name.trim()) return;
    setHabits(prev => [
      ...prev,
      { id: crypto.randomUUID(), name: name.trim(), records: {}, createdAt: Date.now() }
    ]);
  }, []);

  const deleteHabit = useCallback((id) => {
    setHabits(prev => prev.filter(h => h.id !== id));
  }, []);

  const toggleHabitRecord = useCallback((habitId, dateKey) => {
    setHabits(prev => prev.map(habit => {
      if (habit.id !== habitId) return habit;
      const newRecords = { ...habit.records };
      if (newRecords[dateKey]) {
        delete newRecords[dateKey];
      } else {
        newRecords[dateKey] = true;
      }
      return { ...habit, records: newRecords };
    }));
  }, []);

  const exportData = useCallback(() => {
    const blob = new Blob([JSON.stringify(habits, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `habit-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [habits]);

  return { habits, addHabit, deleteHabit, toggleHabitRecord, exportData };
};