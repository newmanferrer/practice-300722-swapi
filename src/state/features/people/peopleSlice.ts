import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { IPeople } from '../../../models';

const initialState: IPeople = {
  count: 0,
  next: null,
  previous: null,
  results: []
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState: initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<IPeople>) => {
      const { count, previous, next, results } = action.payload;
      state.count = count;
      state.previous = previous;
      state.next = next;
      state.results = results;
    }
  }
});

export const { setPeople } = peopleSlice.actions;
export const selectPeople = (state: RootState) => state.people.results;
export const peopleReducer = peopleSlice.reducer;
