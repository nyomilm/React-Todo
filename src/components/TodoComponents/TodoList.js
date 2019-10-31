// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoBlock from './Todo';

const TodoList = ({ stateList, completionHandler }) => {
    return (
        <div>
            {stateList.map((item, id) => (
                <TodoBlock key={id} item={item} completionHandler={completionHandler} />
            )
                )}
        </div>
    );
};

export default TodoList;