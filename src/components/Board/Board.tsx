import React, { useEffect } from 'react';
import { Column } from '../Column/Column';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addTask } from '../../store/tasksSlice';
import AddTaskForm from '../AddTaskForm/AddTaskForm';

const Board: React.FC = () => {
  const dispatch = useDispatch();  // Хук для отправки экшенов в Redux
  const tasks = useSelector((state: RootState) => state.tasks);  // Хук для получения задач из состояния Redux

  // Добавление тестовой задачи
  useEffect(() => {
    dispatch(addTask({
      id: 1,
      title: 'Task 1',
      description: 'This is a test task.',
      column: 'To Do'
    }));
    dispatch(addTask({
      id: 2,
      title: 'Task 2',
      description: 'Another test task.',
      column: 'In Progress'
    }));
  }, [dispatch]);

  // Разделяем задачи по колонкам
  const columns = ['To Do', 'In Progress', 'Done'];
  const tasksByColumn = columns.map(column => tasks.filter(task => task.column === column));

  return (
    <div className="board-container">
      <h1 className="board-title">Kanban Board</h1>
      <AddTaskForm />
      <div className="columns-container">
        {columns.map((column, index) => (
          <Column key={column} title={column} tasks={tasksByColumn[index]} />
        ))}
      </div>
    </div>
  );
};

export default Board;