import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../models";
import { generateId } from "../utils";

const initUser: UserModel = { id: generateId(), username: "mountain-chan", displayName: "Chan Ly", point: 0 };

const authSlice = createSlice({
  name: "auth",
  initialState: initUser,
  reducers: {
    updateAuth(state, action: { payload: UserModel }) {
      const newUser = action.payload;
      state = newUser;
      return state;
    },
    updatePoint(state, action: { payload: number }) {
      const point = action.payload;
      state.point = point;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
