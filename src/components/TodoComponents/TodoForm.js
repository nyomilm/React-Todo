import React from 'react';

const TodoForm = () => {
    return (
        <form>
            <input type="text" name="todo" />
            <input type="button" name="clearAll" value="Clear Completed" 
            onClick={() => clearCompleted()} />
            <input type="button" name="submission" value="Add Todo" />
        </form>
    );
};

export default TodoForm