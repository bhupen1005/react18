import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserState {
  user: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
};

// Thunk for fetching user data
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId: number, thunkAPI) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    console.log("Fetched user data:", response.data);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Add meaningful reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        console.log("Fetch user pending");
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("Fetch user fulfilled:", action.payload);
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log("Fetch user rejected:", action.error.message);
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch user";
      });
  },
});

// Action creators are generated for each case reducer function
// export const { } = userSlice.actions;

export default userSlice.reducer;
