import { createSlice } from "@reduxjs/toolkit"

import { User, defaultUser } from "@/models/user.model"
import {
  clearLocalStorage,
  persistLocalStorage
} from "@/utils/local-storage.util"

export const USER_KEY = "user"

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : defaultUser,
  reducers: {
    createUser: (_state, action) => {
      persistLocalStorage<User>(USER_KEY, action.payload)
      return action.payload
    },
    updateUser: (state, action) => {
      const updatedUser = { ...state, ...action.payload }
      persistLocalStorage<User>(USER_KEY, updatedUser)
      return updatedUser
    },
    resetUser: () => {
      clearLocalStorage(USER_KEY)
      return defaultUser
    }
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
