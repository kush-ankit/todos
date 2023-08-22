import { create } from 'zustand'

export const taskObject = create((set, get) => ({
    input: '',
    taskNameList: [],
    getLocalStorage: () => {
        let Value = JSON.parse(localStorage.getItem('Abc'));
        console.log(Value);
        set({ taskNameList: Value })
    },
    // { id: 73868276482, task: 'hello', iscomplete: true }, JSON.parse(localStorage.getItem("Abc"))
    setInputValue: (value) => {
        set({ input: value });
    },
    addTask: () => {
        // created a new task object
        const taskDetails = {
            id: new Date().getTime(),
            task: get().input,
            iscomplete: false,
        };

        // added the task in the state
        const currentTasks = get().taskNameList;
        set({ taskNameList: [...currentTasks, taskDetails], input: '' });

        // persisted the tasks in localStorage
        let abc = JSON.stringify(get().taskNameList);
        localStorage.setItem('Abc', abc);
    },
    deleteTask: (id) => {
        let taskNameList = get().taskNameList;
        let index = taskNameList.findIndex((obj) => obj.id === id);
        delete taskNameList[index];
        let filterdTsakNameList = taskNameList.filter(Boolean);
        set({ taskNameList: filterdTsakNameList });
        let abc = JSON.stringify(get().taskNameList);
        localStorage.setItem('Abc', abc);
    },
    markAsComplete: (index) => {
        let taskNameList = get().taskNameList;
        let newTaskNameList = taskNameList[index].iscomplete = true;
        console.log(newTaskNameList);
    }
}));



