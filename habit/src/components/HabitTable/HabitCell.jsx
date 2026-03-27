import React from 'react';

const HabitCell = React.memo(({ isCompleted, dateKey, habitId, onToggle }) => {
  return (
    <td className="habit-cell">
      <button 
        className={`cell-btn ${isCompleted ? 'completed' : ''}`}
        onClick={() => onToggle(habitId, dateKey)}
        aria-label={isCompleted ? "Mark incomplete" : "Mark complete"}
      />
    </td>
  );
});

HabitCell.displayName = 'HabitCell';
export default HabitCell;