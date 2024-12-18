import { create } from 'zustand'

export const useStore = create((set) => ({
  count: 0,
  token: null,
  inc: (payload) => set((state) => ({ count: state.count + payload })),
  reset: () => set({ count: 0 }),
  login: (payload) => set(()=> {
    localStorage.setItem("token",payload)
    return {token: payload}
  }),
  logout: () => set({token: null}),
}))
