import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import Profile from './Components/Profile';
import { useCreateUser } from './globalState/User-state';

function App() {

  const [userName, password, setUserName, setPassword, loginUser] = useCreateUser((state) => [state.userName, state.password, state.setUserName, state.setPassword, state.loginUser]);

  const [tab, setTab] = useState(0)

  if (tab === 0) {
    return (
      <div className="App md:w-[40%] w-[80%] m-auto flex flex-col p-4 ">
        <header className=' md:outline outline-1 outline-white '>
          <div className='h-12 flex flex-grow items-center p-2'>
            <h1 className='grow text-2xl font-extrabold '>MyTodos</h1>
            <div className='grow-0'>
              <button onClick={() => setTab(1)}><Profile /></button>
            </div>
          </div>
        </header>
        <TodoList />
      </div>
    );
  }
  function handle(){
    setTab(0);
    loginUser();
  }
  if (tab === 1) {
    return (
      <div>
        <div className=' md:w-[40%] w-[80%] m-auto flex flex-col p-4 gap-4'>
          <h1 className='text-xl font-bold'>Login User</h1>
          <input type="text" placeholder='UserName' value={userName} onChange={(ev)=>(setUserName(ev.target.value))} />
          <input type="password" placeholder='Password' value={password} onChange={(ev)=>(setPassword(ev.target.value))} />
          <button type='submit' onClick={handle} className='outline outline-1 w-fit p-1 rounded-sm'>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
