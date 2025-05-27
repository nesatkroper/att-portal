// lib/redux/provider.tsx
"use client"

import { Provider } from "react-redux"
import { makeStore } from "@/store"

const store = makeStore()

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}


// 'use client'

// import { Provider } from 'react-redux'
// import { store } from '@/store'

// export function ReduxProvider({ children }: { children: React.ReactNode }) {
//   return <Provider store={store}>{children}</Provider>
// }
