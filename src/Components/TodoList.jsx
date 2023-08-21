import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DoneIcon from '@mui/icons-material/Done';
import { taskObject } from '../globalState/User-State';
import './TodoList.css';


function TodoList() {

    // const activeTaskList = useListTaskStore((state) => state.activeTaskList);
    // const completeTaskList = useListTaskStore((state) => state.completeTaskList);
    // const addTask = useListTaskStore((state) => state.addTask);
    // const completeTask = useListTaskStore((state) => state.completeTask);
    // const deleteActiveTask = useListTaskStore((state) => state.deleteActiveTask);
    // const deleteCompleteTask = useListTaskStore((state) => state.deleteCompleteTask);
    const [taskNameList ,addTask, setInputValue, input] = taskObject((state) => [state.taskNameList, state.addTask, state.setInputValue, state.input]);



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
                    taskNameList.filter((data)=>{
                        return data.isComplete === false
                    }).map((data, index) => {
                        return (
                            <div className='listLine flex flex-grow outline outline-1 p-2'>
                                <div className=' grow'>{data}</div>
                                {/* <button className='text-green-700 flex-none px-2' onClick={() => (completeTask(index))}><DoneIcon /></button>
                                <button className='text-red-700 flex-none px-2' onClick={() => (deleteActiveTask(index))}><DeleteIcon /></button>*/}
                            </div> 
                        )

                    })
                }
            </div>
            {/* <div className='w-full h-full flex flex-col gap-3 outline outline-1 outline-white p-2'>
                <div className='font-bold text-xl text-green-600'>
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
            </div> */}
        </div>
    )
}

export default TodoList