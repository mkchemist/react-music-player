import { configureStore } from "@reduxjs/toolkit";
import PlaylistSlice from "./Features/Playlist/PlaylistSlice";

export const store = configureStore({
  reducer: {
    playlist: PlaylistSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
