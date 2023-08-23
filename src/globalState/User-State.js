import { create } from "zustand"
import { useAppStore } from "./App-state";


export const useCreateUser = create((set, get) => ({
    userName: '',
    password: '',
    currentUser: null,
    users: [],
    setUserName: (value) => {
        set({ userName: value });
    },
    saveCurrentUser: () => {
        localStorage.setItem('currentUser', get().currentUser);
    },
    getLocalCurrentUser: async () => {
        let currentUser = localStorage.getItem('currentUser');
        set({ currentUser: currentUser });
        await useAppStore.setState({ isLoggedIn: true });
    },
    setPassword: (value) => {
        set({ password: value });
    },
    getLocalStorageUser: () => {
        let Value = JSON.parse(localStorage.getItem('Users'));
        if (Value) {
            set({ users: Value })
        } else {
            set({ users: [] });
        }
    },
    createUser: () => {
        let UserObject = {
            userName: get().userName,
            password: get().password,
        };
        set({ users: [...get().users, UserObject], userName: '', password: '' });
        let abc = JSON.stringify(get().users);
        localStorage.setItem('Users', abc);
    },
    loginUser: async () => {
        get().getLocalStorageUser();
        let users = get().users;
        if (users === [] || users.length === 0) {
            console.log("there are no users");
            set({ userName: '', password: '' });
        }
        else {
            let userObject = users.find(obj => obj.userName === get().userName);
            if (userObject) {
                if (userObject.password === get().password) {
                    set({ currentUser: get().userName, userName: '', password: '' });
                    console.log("You are logged in:", get().currentUser);
                    await useAppStore.setState({ isLoggedIn: true });
                    get().saveCurrentUser();
                } else {
                    console.log("Wrong Password")
                };
            }
        }
    },

}));