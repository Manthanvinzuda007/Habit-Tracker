import React from 'react';
import HabitCell from './HabitCell';
import { generateDateKey } from '../../utils/dateUtils';

const HabitRow = ({ habit, year, month, daysInMonth, onToggle, onDelete }) => {
  const cells = [];
  
  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = generateDateKey(year, month, day);
    cells.push(
      <HabitCell 
        key={dateKey}
        dateKey={dateKey}
        habitId={habit.id}
        isCompleted={!!habit.records[dateKey]}
        onToggle={onToggle}
      />
    );
  }

  return (
    <tr>
      <th className="sticky-col habit-name-col">
        <div className="habit-name-wrapper">
          <span>{habit.name}</span>
          <button className="delete-btn" onClick={() => onDelete(habit.id)} aria-label="Delete habit">×</button>
        </div>
      </th>
      {cells}
    </tr>
  );
};

export default React.memo(HabitRow);