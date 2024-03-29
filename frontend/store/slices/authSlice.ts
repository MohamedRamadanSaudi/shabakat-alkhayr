import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    access_token: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      // state.user = action.payload.user

      state.isAuthenticated = action.payload.isAuthenticated
      state.access_token = action.payload.access_token
      state.error = null
    },

    setError: (state, action) => {
      state.error = action.payload
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.access_token = null
      state.error = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setError, logout } = authSlice.actions

export default authSlice.reducer
