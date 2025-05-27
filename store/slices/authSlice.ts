import { Employeeinfo } from "@/generator/prisma"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"



interface AuthState {
  user: {
    id: string
    email: string
    role: string
    status: string
    employee: Employeeinfo | null
  } | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

// Async login action
export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      if (!res.ok) return rejectWithValue(data.error || "Sign in failed")

      return data.user
    } catch (err) {
      return rejectWithValue("Network error")
    }
  }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload
        state.loading = false
      },
      logout: (state) => {
        state.user = null
      },
    },
    extraReducers: (builder) => {
      builder.addCase(HYDRATE, (state, action) => {
        if ('auth' in (action as any).payload) {
          return {
            ...state,
            ...(action as any).payload.auth, // or type it safely
          }
        }
      })
    },
  })

export const { logout } = authSlice.actions
export default authSlice.reducer
