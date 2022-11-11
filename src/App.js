import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import data from './data.json';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id) ? {...task, complete: !task.complete} : {...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    })
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}]
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
