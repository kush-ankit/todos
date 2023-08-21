import { create } from 'zustand'


// export const useListTaskStore = create((set, get) => ({
//     user: '',
//     email: '',
//     password: '',
//     activeTaskList: [],
//     completeTaskList: [],
//     addTask: (data) => {
//         let activeTaskListValue = get().activeTaskList;
//         set((state) => ({ activeTaskList: ([...activeTaskListValue, data]) }));
//     },
//     deleteActiveTask: (taskId) => {
//         let activeTaskListValue = get().activeTaskList;
//         delete activeTaskListValue[taskId];
//         let filteredActiveTaskListValue = activeTaskListValue.filter(Boolean);
//         set((state) => ({ activeTaskList: ([...filteredActiveTaskListValue]) }));
//     },
//     completeTask: (taskId) => {
//         let activeTaskListValue = get().activeTaskList;
//         let completeTaskListValue = get().completeTaskList;
//         set((state) => ({ completeTaskList: ([...completeTaskListValue, activeTaskListValue[taskId]]) }));
//         delete activeTaskListValue[taskId];
//         let filteredActiveTaskListValue = activeTaskListValue.filter(Boolean);
//         set((state) => ({ activeTaskList: ([...filteredActiveTaskListValue]) }));
//     },
//     deleteCompleteTask: (taskId) => {
//         let completeTaskListValue = get().completeTaskList;
//         delete completeTaskListValue[taskId];
//         let filteredcompleteTaskListValue = completeTaskListValue.filter(Boolean);
//         set((state) => ({ completeTaskList: ([...filteredcompleteTaskListValue]) }));
//     },
// }));


export const taskObject = create((set, get) => ({
    input: '',
    taskNameList: [{ id: new Date().getHours(), task: 'hello', isComplete: false }],
    addTaskDetails: (taskDetails) => {
        console.log(taskDetails);
        set((state) => ({ taskName: get().taskNameList.push(taskDetails) }));
        let abc = JSON.stringify(get().taskNameList);
        localStorage.setItem('Abc', abc);
    },
    setInputValue: (value)=>{
        set({input: value});
    },
    addTask: ()=>{
        // created a new task object
        const taskDetails = {
            id: new Date().getTime(),
            task: get().input,
            iscomplete: false,
        };

        // added the task in the state
        const currentTasks = get().taskNameList;
        set({ taskNameList: [...currentTasks, taskDetails], input:''});

        // persisted the tasks in localStorage
        let abc = JSON.stringify(get().taskNameList);
        localStorage.setItem('Abc', abc);
    }

}));



