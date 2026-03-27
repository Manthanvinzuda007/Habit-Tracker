import React from 'react';
import HabitRow from './HabitRow';
import './HabitTable.css';

const HabitTable = ({ habits, year, month, daysInMonth, onToggle, onDelete }) => {
  const headers = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="table-container">
      <table className="habit-table">
        <thead>
          <tr>
            <th className="sticky-col top-left-header">Habits</th>
            {headers.map(day => <th key={day}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {habits.length === 0 ? (
            <tr><td colSpan={daysInMonth + 1} className="empty-state">No habits added yet.</td></tr>
          ) : (
            habits.map(habit => (
              <HabitRow 
                key={habit.id} 
                habit={habit} 
                year={year} 
                month={month} 
                daysInMonth={daysInMonth} 
                onToggle={onToggle} 
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HabitTable;