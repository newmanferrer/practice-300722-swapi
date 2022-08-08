import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { ICharacter } from '../../../models';

const initialState: ICharacter = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '',
  edited: '',
  url: ''
};

export const characterDetailsSlice = createSlice({
  name: 'characterDetails',
  initialState: initialState,
  reducers: {
    setCharacterDetails: (state, action: PayloadAction<ICharacter>) => {
      const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        homeworld,
        films,
        species,
        vehicles,
        starships,
        created,
        edited,
        url
      } = action.payload;

      state.name = name;
      state.height = height;
      state.mass = mass;
      state.hair_color = hair_color;
      state.skin_color = skin_color;
      state.eye_color = eye_color;
      state.birth_year = birth_year;
      state.gender = gender;
      state.homeworld = homeworld;
      state.films = films;
      state.species = species;
      state.vehicles = vehicles;
      state.starships = starships;
      state.created = created;
      state.edited = edited;
      state.url = url;
    }
  }
});

export const { setCharacterDetails } = characterDetailsSlice.actions;
export const selectCharacterDetails = (state: RootState) => state.characterDetails;
export const characterDetailsReducer = characterDetailsSlice.reducer;
