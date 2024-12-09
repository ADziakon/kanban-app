import React from 'react';

interface ColumnProps {
  title: string;
}

export const Column: React.FC<ColumnProps> = ({ title }) => {
  return (
    <div className="column-container">
      <h2 className="column-title">{title}</h2>
      {/* Здесь будут отображаться задачи */}
      <div className="column-content"> 
        {/* Здесь будут отображаться задачи */}
      </div>
    </div>
  );
};