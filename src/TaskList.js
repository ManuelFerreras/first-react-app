import React from 'react';
import Task from './Task';

export default ({ tasks, markAsDone, markAsUndone, deleteTask }) => {

    return(

        <ul className="list-group">

            {tasks.map(task => (
                 <li key={task.id} className="list-group-item"><Task task={task} markAsDone={markAsDone} markAsUndone={markAsUndone} deleteTask={deleteTask} /></li>
            ))}
           
        </ul>

    );

}