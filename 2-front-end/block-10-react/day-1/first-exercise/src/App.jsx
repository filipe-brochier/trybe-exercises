import React from 'react';
import tasks from './data';

const Task = (value) => {
  return (
    <li className="pt-2">
      {value}
    </li>
  );
}

function App() {
    return (
      <div className="App bg-gray-100">
        <header className="text-center p-b-2">
          <h1 className="text-3xl font-bold">To-do list</h1>
          <h2 className="text-lg font-semibold">My First React App</h2>
        </header>
        <main className="pt-4">
          <ul className="text-center">
            { tasks.map((item) => Task(item) )}
          </ul>
        </main>
      </div>
    );
}

export default App;
