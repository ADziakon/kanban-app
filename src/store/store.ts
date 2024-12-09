import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Здесь мы будем добавлять редьюсеры для задач и колонок
  },
});

export default store;