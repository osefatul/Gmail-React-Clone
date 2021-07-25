import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userSlice,
  },
});
