import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ScoreGraph = ({ data }) => {
  return (
    <div style={{ height: '300px', width: '100%', marginTop: '32px' }}>
      <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Daily Score (0-10)</h3>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
          <XAxis dataKey="day" stroke="var(--text-secondary)" tick={{fontSize: 12}} />
          <YAxis domain={[0, 10]} stroke="var(--text-secondary)" tick={{fontSize: 12}} />
          <Tooltip 
            contentStyle={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
          />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="var(--primary-color)" 
            strokeWidth={3} 
            dot={{ fill: 'var(--primary-color)', r: 4 }} 
            activeDot={{ r: 6 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(ScoreGraph);