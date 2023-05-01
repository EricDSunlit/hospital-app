import { User, defaultUser } from "@/models/user.model"
import {
  clearLocalStorage,
  persistLocalStorage
} from "@/utils/local-storage.util"
import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit"

export const userKey = "user"

export const userSlice = createSlice<User, SliceCaseReducers<User>>({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : defaultUser,
  reducers: {
    createUser: (_state, action) => {
      persistLocalStorage<User>(userKey, action.payload)
      return action.payload
    },
    updateUser: (state, action) => {
      const updatedUser = { ...state, ...action.payload }
      persistLocalStorage<User>(userKey, updatedUser)
      return updatedUser
    },
    resetUser: () => {
      clearLocalStorage(userKey)
      return defaultUser
    }
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
