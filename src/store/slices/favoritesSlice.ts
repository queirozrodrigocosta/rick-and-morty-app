import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  characterIds: number[];
}

const initialState: FavoritesState = {
  characterIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.characterIds.indexOf(id);
      if (index > -1) {
        state.characterIds.splice(index, 1);
      } else {
        state.characterIds.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;