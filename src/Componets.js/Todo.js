import React from 'react'
import ToDoitem from './TodoItem';

 function Todo({jobs, gach}) {
    return(
        <div className="container">
            <ul>
            {jobs.map((job, index)=>
                <ToDoitem key = {index} item = {job}/>)}
            </ul>
        </div>  
    )
}
export default Todo;