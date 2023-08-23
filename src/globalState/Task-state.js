import { create } from 'zustand'
import { useCreateUser } from './User-state';


export const taskObject = create((set, get) => ({
    input: '',
    taskNameList: [],
    getLocalStorage: () => {
        let Value = JSON.parse(localStorage.getItem('Tasks'));
        if (Value) {
            set({ taskNameList: Value })
        } else {
            set({ taskNameList: [] });
        }
    },
    setInputValue: (value) => {
        set({ input: value });
    },
    addTask: () => {
        // created a new task object
        const taskDetails = {
            id: new Date().getTime(),
            task: get().input,
            iscomplete: false,
            user: useCreateUser.getState().currentUser
        };
        // added the task in the state
        const currentTasks = get().taskNameList;
        set({ taskNameList: [...currentTasks, taskDetails], input: '' });

        // persisted the tasks in localStorage
        let abc = JSON.stringify(get().taskNameList);
        localStorage.setItem('Tasks', abc);
    },
    deleteTask: (id) => {
        let taskNameList = get().taskNameList;
        let index = taskNameList.findIndex((obj) => obj.id === id);
        delete taskNameList[index];
        let filterdTsakNameList = taskNameList.filter(Boolean);
        set({ taskNameList: filterdTsakNameList });
        let abc = JSON.stringify(get().taskNameList);
        localStorage.setItem('Tasks', abc);
        get().getLocalStorage();
    },
    markAsComplete: (id) => {
        let taskNameList = get().taskNameList;
        let index = taskNameList.findIndex((obj) => obj.id === id);
        taskNameList[index].iscomplete = true;
        let abc = JSON.stringify(get().taskNameList);
        localStorage.setItem('Tasks', abc);
        get().getLocalStorage();
    }
}));


