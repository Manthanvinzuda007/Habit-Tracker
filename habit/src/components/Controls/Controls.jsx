import React, { useState } from 'react';
import './Controls.css';

const Controls = ({
  year,
  month,
  onDateChange,
  onAddHabit,
  onToggleTheme,
  theme,
  onExport
}) => {
  const [newHabitName, setNewHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newHabitName.trim()) {
      alert('Please enter a habit name');
      return;
    }

    // Safe call
    if (typeof onAddHabit === 'function') {
      onAddHabit(newHabitName.trim());
    }

    setNewHabitName('');
  };

  const handleMonthChange = (e) => {
    const value = e.target.value; // format: "YYYY-MM"
    if (!value) return;

    const [y, m] = value.split('-');

    const newDate = new Date(Number(y), Number(m) - 1);

    if (typeof onDateChange === 'function') {
      onDateChange(newDate);
    }
  };

  return (
    <div
      className="controls-container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '10px'
      }}
    >
      {/* Left Section */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="month"
          value={`${year}-${String(month + 1).padStart(2, '0')}`}
          onChange={handleMonthChange}
          style={{
            padding: '8px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            background: 'var(--surface-color)',
            color: 'var(--text-primary)'
          }}
        />

        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '5px' }}>
          <input
            type="text"
            value={newHabitName}
            onChange={(e) => setNewHabitName(e.target.value)}
            placeholder="New Habit..."
            style={{
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--surface-color)',
              color: 'var(--text-primary)'
            }}
          />

          <button
            type="submit"
            style={{
              padding: '8px 16px',
              background: 'var(--success-color)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Add
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => typeof onToggleTheme === 'function' && onToggleTheme()}
          style={{
            padding: '8px 16px',
            background: 'var(--surface-color)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>

        <button
          onClick={() => typeof onExport === 'function' && onExport()}
          style={{
            padding: '8px 16px',
            background: 'var(--primary-color)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Export JSON
        </button>
      </div>
    </div>
  );
};

export default Controls;