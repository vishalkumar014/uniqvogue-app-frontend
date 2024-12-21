import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoggedIn: false,
  user: null,
  status:""
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    const response = await fetch(`/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      credentials: "include",
    });
    if (!response.ok) throw new Error(await response.text());
    const profile = await response.json();
    return profile;
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    const response = await fetch(`/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      credentials: "include",
    });
    if (!response.ok) throw new Error(await response.text());
    const profile = await response.json();
    return profile;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.isLoggedIn = true;
      state.status = "success";
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoggedIn = false;
      state.status = "failed";
    });
  },
});

export default authSlice.reducer;
export const {setAuth,logOut} = authSlice.actions;