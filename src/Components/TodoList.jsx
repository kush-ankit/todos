import React, { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { taskObject } from '../globalState/Task-state';
import './TodoList.css';
// import { useAppStore } from '../globalState/App-state';
import { useCreateUser } from '../globalState/User-state';


function TodoList() {

    const [taskNameList, addTask, setInputValue, input, markAsComplete, deleteTask, getLocalStorage] = taskObject((state) => [state.taskNameList, state.addTask, state.setInputValue, state.input, state.markAsComplete, state.deleteTask, state.getLocalStorage]);

    const [currentUser] = useCreateUser((state) => [state.currentUser]);

    
    let userTaskList = taskNameList.filter((task) => {
        return task.user === currentUser;
    }).map((task)=>{
        return task;
    });

    useEffect(() => {
        getLocalStorage();
    }, [])

    return (
        <div>
            <div className='flex flex-grow outline outline-1 rounded-sm overflow-hidden p-2'>
                <input type="text" className='grow p-2 text-black' value={input} onChange={(ev) => (setInputValue(ev.target.value))} />
                <button type='submit' className='p-2 bg-blue-500' onClick={addTask}>Submit</button>
            </div>
            <div className='w-full h-full flex flex-col gap-3 outline outline-1 outline-white p-2'>
                <div className='font-bold text-xl text-red-600'>
                    ActiveList
                </div>
                {
                    userTaskList.filter(({ id, task, iscomplete, user }, index) => {
                        return !iscomplete
                    }).map(({ id, task, iscomplete }, index) => {
                        return (
                            <div className='listLine flex flex-grow outline outline-1 p-2'>
                                <div className=' grow'>{task}</div>
                                <button className='text-green-700 flex-none px-2' onClick={() => (markAsComplete(id))}><DoneIcon /></button>
                                <button className='text-red-700 flex-none px-2' onClick={() => (deleteTask(id))}><DeleteIcon /></button>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full h-full flex flex-col gap-3 outline outline-1 outline-white p-2'>
                <div className='font-bold text-xl text-green-600'>
                    CompleteList
                </div>
                {
                    userTaskList.filter(({ id, task, iscomplete }) => {
                        return iscomplete
                    }).map(({ id, task, iscomplete }) => {
                        return (
                            <div className='listLine flex flex-grow outline outline-1 p-2'>
                                <div className=' grow'>{task}</div>
                                <button className='text-red-700 flex-none px-2' onClick={() => (deleteTask(id))}><DeleteIcon /></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default TodoList