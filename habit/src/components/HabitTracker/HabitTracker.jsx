import React, { useState, useMemo } from 'react';
import HabitTable from '../HabitTable/HabitTable';
import ScoreGraph from '../ScoreGraph/ScoreGraph';
import Controls from '../Controls/Controls';
import { useHabits } from '../../hooks/useHabits';
import { getDaysInMonth, calculateDailyScores } from '../../utils/dateUtils';
import './HabitTracker.css';

const HabitTracker = () => {
  const { habits, addHabit, deleteHabit, toggleHabitRecord, exportData } = useHabits();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [theme, setTheme] = useState('light');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);

  const scoreData = useMemo(() => 
    calculateDailyScores(habits, year, month, daysInMonth), 
  [habits, year, month, daysInMonth]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="habit-tracker-container">
      <header className="tracker-header">
        <h2>Habit Tracker SaaS</h2>
      </header>

      <Controls 
        year={year}
        month={month}
        onDateChange={setCurrentDate}
        onAddHabit={addHabit}
        onToggleTheme={toggleTheme}
        theme={theme}
        onExport={exportData}
      />

      <HabitTable 
        habits={habits}
        year={year}
        month={month}
        daysInMonth={daysInMonth}
        onToggle={toggleHabitRecord}
        onDelete={deleteHabit}
      />

      {habits.length > 0 && <ScoreGraph data={scoreData} />}
    </div>
  );
};

export default HabitTracker;