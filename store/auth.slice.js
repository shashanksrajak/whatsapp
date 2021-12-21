import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseAPI = "http://localhost:7001"

export const refreshAuth = createAsyncThunk(
  "auth/refreshAuth",
  async (thunkAPI) => {
    console.log(baseAPI);
    const response = await fetch(`${baseAPI}/v1/auth/verify-me`, {
      credentials: 'include'
    });

    console.log(response)

    if (response.status === 401) {
      return false;
    }

    const data = await response.json();
    console.log(data)

    return data;
  }
);

const initialState = {
  user: {},
  isLoggedIn: false,
  refreshingAuth: true,
  justLoggedOut: null,
};

const authSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {
    loginUser: (state, { payload }) => {
      if (payload.isAuthenticated) {
        state.user = payload;
        state.isLoggedIn = true;
        state.justLoggedOut = false;
      }
    },
    logoutUser: (state) => {
      state.user = {};
      state.isLoggedIn = false;
      state.justLoggedOut = true;
    },
  },
  extraReducers: {
    [refreshAuth.pending]: (state) => {
      state.refreshingAuth = true;
    },
    [refreshAuth.fulfilled]: (state, { payload }) => {
      if (payload.isAuthenticated) {
        state.user = payload;
        state.isLoggedIn = true;
        state.refreshingAuth = false;
      } else {
        state.refreshingAuth = false;
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
