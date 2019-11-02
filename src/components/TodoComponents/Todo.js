import React from 'react';
import './Todo.css';


const Todo = ({ completionHandler, item: { task, id, completed } }) => {
    return (
        <div>
            <p className={`${completed ? 'underline' : ''}`}
                onClick={() =>
                    completionHandler(id)}
                    >{task}</p>
        </div>
    );
};
export default Todo;