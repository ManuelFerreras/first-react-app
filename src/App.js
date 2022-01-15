import React, { useState } from 'react';
import TaskList from './TaskList';
import NewTask from './NewTask';

function App() {

  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(0);

  const createTask = description => {
    setTasks(tasks => ([...tasks, {id: nextId, description, done: false}]));
    setNextId(nextId + 1);
  }

  const markAsDone = id => {

    const newTaskList = tasks.map(task => {
      if(task.id === id) {
        task.done = true;
      }
      return task;
    });

    setTasks(newTaskList);

  }

  const markAsUndone = id => {
    const newTasksList = tasks.map(task => {
      if(task.id === id) {
        task.done = false;
      }
      return task;
    });
    setTasks(newTasksList);
  }

  const deleteTask = id => {

    setTasks(tasks.filter(task => task.id !== id));

  }

  return (
    <div className='container'>

      <div className='row'>

        <div className='col'>

          <div className='jumbotron'>
            <h1 className='display-4'>TODO APP</h1>
          </div>
          <NewTask createTask={createTask} />
          <br />
          <TaskList tasks={tasks} markAsDone={markAsDone} markAsUndone={markAsUndone} deleteTask={deleteTask} />
        </div>

      </div>  

    </div>
  );
}

export default App;
