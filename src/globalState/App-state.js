import { create } from "zustand";


export const useAppStore = create((get, set) => ({
    isInitialized: false,
    isLoggedIn: false,
    loggedUser: '',
    setIsInitialized: (value)=>{
        set({ isInitialized: value})
    },
    
}));