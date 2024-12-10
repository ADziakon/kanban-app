import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const store = configureStore({
  reducer: {
    // Добавляем редьюсеры для задач и колонок
    tasks: tasksReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;