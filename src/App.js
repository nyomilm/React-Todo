import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';


const todoItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todoItems
    };
  };

  
handleClick = id => {
  this.setState({
    todo: this.state.todo.map(task =>{
      if (task.id === id){
        return {
          ...task,
          completed: !task.completed
        };
      }else{
        return task;
      }
    })
  });
};

clearCompleted = () => {
  this.setState({
    todo: this.state.todo.filter(item => !item => !item.completed)
  });
};


addItem = 
  render() {
    console.log("rendering...");
     return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        stateList={this.state.todoItems}
        completionHandler={this.handleClick}
        />
        <TodoForm />
        </div>
        
      </div>
    );
  }
}

export default App;
