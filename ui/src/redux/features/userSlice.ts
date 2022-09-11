import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user.type";

type CurrentUser = {
  user: User;
};

const initialState: CurrentUser = {
  user: { id: 0, name: "", username: "", email: "", phone: "" },
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;