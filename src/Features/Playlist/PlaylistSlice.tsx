import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface playlistState {
  songs: File[];
  currentSelected: File | null;
  currentIndex: number | null;
  isPlaying: boolean;
}

const initialState: playlistState = {
  songs: [],
  currentSelected: null,
  currentIndex: null,
  isPlaying: false,
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    collect: (state, action: PayloadAction<File[]>) => {
      state.songs = [...state.songs, ...action.payload];
    },
    removeSong: (state, action: PayloadAction<number>) => {
      state.songs.splice(action.payload, 1);
    },
    selectSong: (state, action: PayloadAction<number>) => {
      if (action.payload === state.currentIndex && state.isPlaying) {
        state.isPlaying = false;
      } else {
        state.currentSelected = state.songs[action.payload];
        state.currentIndex = action.payload;
        state.isPlaying = true;
      }
    },
  },
});

export const { collect, removeSong, selectSong } = playlistSlice.actions;

export default playlistSlice.reducer;
