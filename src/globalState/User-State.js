import { create } from 'zustand'


export const useListTaskStore = create((set, get) => ({
    user: '',
    email: '',
    password: '',
    activeTaskList: ['hello', 'aba', 'cdcd'],
    completeTaskList: [],
    addTask: (data) => {
        let activeTaskListValue = get().activeTaskList;
        set((state) => ({ activeTaskList: ([...activeTaskListValue, data]) }));
    },
    deleteActiveTask: (taskId) => {
        let activeTaskListValue = get().activeTaskList;
        delete activeTaskListValue[taskId];
        let filteredActiveTaskListValue = activeTaskListValue.filter(Boolean);
        set((state) => ({ activeTaskList: ([...filteredActiveTaskListValue]) }));
    },
    completeTask: (taskId) => {
        let activeTaskListValue = get().activeTaskList;
        let completeTaskListValue = get().completeTaskList;
        set((state) => ({ completeTaskList: ([...completeTaskListValue, activeTaskListValue[taskId]]) }));
        delete activeTaskListValue[taskId];
        let filteredActiveTaskListValue = activeTaskListValue.filter(Boolean);
        set((state) => ({ activeTaskList: ([...filteredActiveTaskListValue]) }));
    },
    deleteCompleteTask: (taskId) => {
        let completeTaskListValue = get().completeTask;
        delete completeTaskListValue[taskId];
        let filteredcompleteTaskListValue = completeTaskListValue.filter(Boolean);
        set((state) => ({ completeTask: ([...filteredcompleteTaskListValue]) }));
    },
}));

