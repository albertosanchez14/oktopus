import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../app/store";

export interface AuthState {
  accessToken: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null as string | null },
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
