import { create } from "zustand"

export const useCreateUser = create((set, get) => ({
    userName: '',
    password: '',
    currentUser: null,
    users: [],
    setUserName: (value) => {
        set({ userName: value });
    },
    setPassword: (value) => {
        set({ password: value });
    },
    createUser: () => {
        let UserObject = {
            userName: get().userName,
            password: get().password,
        };
        set({ users: UserObject });
    },
    loginUser: () => {
        let users = get().users;
        let userObject = users.find((obj) => obj.userName === get().userName);
        if (userObject.password === get().password) { set({ currentUser: get().userName }) } else { console.log("user not found") };
    },
}));