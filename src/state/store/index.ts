import { configureStore } from '@reduxjs/toolkit';
import { peopleReducer } from '../features/people/peopleSlice';
import { characterDetailsReducer } from '../features/characterDetails/characterDetailsSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    characterDetails: characterDetailsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
