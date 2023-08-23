import React, { useEffect, useState } from 'react';
import TodoList from './Components/TodoList';
import Profile from './Components/Profile';
import { useCreateUser } from './globalState/User-state';
import { useAppStore } from './globalState/App-state';
import './App.css'

function App() {

  const [userName, password, setUserName, setPassword, loginUser, createUser, currentUser, getLocalCurrentUser] =
    useCreateUser(
      (state) => [state.userName, state.password, state.setUserName, state.setPassword, state.loginUser, state.createUser, state.currentUser, state.getLocalCurrentUser]
    );

  const [isLoggedIn, setIsInitialized] = useAppStore((state) => [state.isLoggedIn, state.setIsInitialized]);

  const [tab, setTab] = useState(0)

  useEffect(() => {
    setIsInitialized(true);
    getLocalCurrentUser();
  }, [])

  if (tab === 0) {
    return (
      <div className="m-auto flex flex-col p-4 bg-[#A9907E] rounded-md">
        <header className=''>
          <div className='h-12 flex flex-grow items-center p-2'>
            <h1 className='grow text-2xl font-extrabold '>MyTodos</h1>
            <div className='grow-0'>
              <button onClick={() => setTab(1)}>{isLoggedIn && currentUser !== null ? currentUser : <Profile />}</button>
            </div>
          </div>
        </header>
        {isLoggedIn ? <TodoList /> : ''}
      </div>
    );
  }

  async function handle1() {
    await loginUser();
    isLoggedIn ? setTab(0) : setTab(1);
  }

  if (tab === 1) {
    return (
      <div className='m-auto flex flex-col p-4 bg-[#A9907E] w-full rounded-md'>
        <div className='App m-auto flex flex-col gap-4 '>
          <h1 className='text-xl font-bold'>Login User</h1>
          <input type="text" placeholder='UserName' value={userName} onChange={(ev) => (setUserName(ev.target.value))} className='p-2 text-gray-800' />
          <input type="password" placeholder='Password' value={password} onChange={(ev) => (setPassword(ev.target.value))} className='p-2 text-gray-800' />
          <button onClick={handle1} className='outline outline-1 w-fit p-1 rounded-sm'>Login</button>
          <div onClick={() => setTab(2)}>Register?</div>
        </div>
      </div>
    )
  }

  function handle2() {
    setTab(1);
    createUser();
  }

  if (tab === 2) {
    return (
      <div className='m-auto flex flex-col p-4 bg-[#A9907E] w-full rounded-md'>
        <div className='App m-auto flex flex-col gap-4'>
          <h1 className='text-xl font-bold'>Register User</h1>
          <input type="text" placeholder='UserName' value={userName} onChange={(ev) => (setUserName(ev.target.value))} className='p-2 text-gray-800'/>
          <input type="password" placeholder='Password' value={password} onChange={(ev) => (setPassword(ev.target.value))} className='p-2 text-gray-800' />
          <button onClick={handle2} className='outline outline-1 w-fit p-1 rounded-sm'>Register</button>
        </div>
      </div>
    )
  }
}

export default App;
