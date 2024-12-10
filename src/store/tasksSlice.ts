import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Тип для задачи
interface Task {
  id: number;
  title: string;
  description: string;
  column: string;
}

const initialState: Task[] = [];

// Создаем слайс для управления задачами
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.push(action.payload);
    },
    
    moveTask(state, action: PayloadAction<{ taskId: number; newColumn: string }>) {
      const { taskId, newColumn } = action.payload;
      const task = state.find(task => task.id === taskId);
      if (task) {
        task.column = newColumn;
      }
    }
  }
});

// Экспортируем действия и редьюсер
export const { addTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;
export type { Task };