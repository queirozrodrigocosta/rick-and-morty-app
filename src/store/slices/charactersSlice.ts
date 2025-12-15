import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: { name: string };
  location: { name: string };
}

interface CharactersState {
  items: Character[];
  loading: boolean;
}

const initialState: CharactersState = {
  items: [],
  loading: false,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCharacters, setLoading } = charactersSlice.actions;
export default charactersSlice.reducer;