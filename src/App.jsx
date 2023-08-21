import React from 'react';
import TodoList from './Components/TodoList';
import Profile from './Components/Profile';

function App() {

  return (
    <div className="App md:w-[40%] w-[80%] m-auto flex flex-col p-4 ">
      <header className=' md:outline outline-1 outline-white '>
        <div className='h-12 flex flex-grow items-center p-2'>
          <h1 className='grow text-2xl font-extrabold '>MyTodos</h1>
          <div className='grow-0'>
            <Profile />
          </div>
        </div>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
