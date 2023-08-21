import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { useListTaskStore } from '../globalState/User-State';
import './TodoList.css';


function TodoList() {

    const activeTaskList = useListTaskStore((state) => state.activeTaskList);
    const completeTaskList = useListTaskStore((state) => state.completeTaskList);
    const addTask = useListTaskStore((state) => state.addTask);
    const completeTask = useListTaskStore((state) => state.completeTask);
    const deleteActiveTask = useListTaskStore((state) => state.deleteActiveTask);
    const deleteCompleteTask = useListTaskStore((state) => state.deleteCompleteTask);


    const [inputString, setInputString] = useState('');


    return (
        <div>
            <div className='flex flex-grow outline outline-1 rounded-sm overflow-hidden p-2'>
                <input type="text" className='grow p-2 text-black' value={inputString} onChange={(ev) => (setInputString(ev.target.value))} />
                <button type='submit' className='p-2 bg-blue-500' onClick={() => (addTask(inputString))}>Submit</button>
            </div>
            <div className='w-full h-full flex flex-col gap-3 outline outline-1 outline-white p-2'>
                <div className='font-bold text-xl'>
                    ActiveList
                </div>
                {
                    activeTaskList.map((activeTask, index) => {
                        return (
                            <div className='listLine flex flex-grow outline outline-1 p-2'>
                                <div className=' grow'>{activeTask}</div>
                                <button className='text-green-700 flex-none px-2' onClick={() => (completeTask(index))}><DoneIcon /></button>
                                <button className='text-red-700 flex-none px-2' onClick={() => (deleteActiveTask(index))}><DeleteIcon /></button>
                            </div>
                        )

                    })
                }
            </div>
            <div className='w-full h-full flex flex-col gap-3 outline outline-1 outline-white p-2'>
                <div className='font-bold text-xl'>
                    CompleteList
                </div>
                {
                    completeTaskList.map((completeTask, index) => {
                        return (
                            <div className='listLine flex flex-grow outline outline-1 p-2'>
                                <div className=' grow'>{completeTask}</div>
                                <button className='text-red-700 flex-none px-2' onClick={() => (deleteCompleteTask(index))}><DeleteIcon /></button>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default TodoList