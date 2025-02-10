import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice.js";
import languageReducer from "./slice/languageSlice";
import themeReducer from "./slice/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
    theme: themeReducer
  },
});