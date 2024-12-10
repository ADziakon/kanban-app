import React from 'react';
import { Task } from '../../store/tasksSlice';

interface ColumnProps {
  title: string;
  tasks: Task[];
}

export const Column: React.FC<ColumnProps> = ({ title, tasks }) => {
  return (
    <div className="column-container">
      <h2 className="column-title">{title}</h2>
      {/* Здесь будут отображаться задачи */}
      <div className="column-content">
      {tasks.length === 0 ? (
          <p>No tasks here</p>
        ) : (
          tasks.map(task => (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};