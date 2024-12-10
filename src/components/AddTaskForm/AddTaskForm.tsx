import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/tasksSlice';

const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      dispatch(addTask({
        id: Date.now(),  // Используем текущий timestamp как уникальный ID
        title,
        description,
        column: 'To Do'  // Новая задача будет по умолчанию в колонке "To Do"
      }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;