import React from 'react';

// const TodoForm = () => {
//     return (
//         <form>
//             <input type="text" name="todo" />
//             <input type="button" name="clearAll" value="Clear Completed" 
//             onClick={() => clearCompleted()} />
//             <input type="button" name="submission" value="Add Todo" />
//         </form>
//     );
// };

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: ''
        };
    }

    handleChange = event => {
       this.setState({
           [event.target.name]: event.target.value
       });
    };

    submitItem = event => {
        event.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                type="text"
                name="item"
                value={this.state.item}
                placeholder="...Add Task"
                onChange={this.handleChange}

                />
                <input
                type="button"
                name="clearAll"
                value="Clear Completed"
                onClick={() => this.props.clearCompleted()}
                />
            </form>
        );
    }
}

export default TodoForm;