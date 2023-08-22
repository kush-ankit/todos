import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { taskObject } from '../globalState/Task-state';
import './TodoList.css';


function TodoList() {


    const [taskNameList, addTask, setInputValue, input, markAsComplete, deleteTask] = taskObject((state) => [state.taskNameList, state.addTask, state.setInputValue, state.input, state.markAsComplete, state.deleteTask]);

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
                        taskNameList.filter(({ id, task, iscomplete }, index) => {
                            return !iscomplete
                        }).map(({ id, task, iscomplete }, index) => {
                            return (
                                <div className='listLine flex flex-grow outline outline-1 p-2'>
                                    <div className=' grow'>{task}</div>
                                    <button className='text-green-700 flex-none px-2' onClick={() => (markAsComplete(index))}><DoneIcon /></button>
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
                        taskNameList.filter(({ id, task, iscomplete }) => {
                            return iscomplete
                        }).map(({ id, task, iscomplete }) => {
                            return (
                                <div className='listLine flex flex-grow outline outline-1 p-2'>
                                    <div className=' grow'>{task}</div>
                                    <button className='text-red-700 flex-none px-2' onClick={() => (markAsComplete(id))}><DeleteIcon /></button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    
}

export default TodoList