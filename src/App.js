import './index.scss';
import ToDoList from './todo/ToDoList'
import AddToDo from './todo/AddToDo'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, description: 'вынести мусор'},
        {id: 2, description: 'сходить в магазин'}
      ],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  handleChange(input) {
    this.setState({
      value: input
    })
  }
  show() {
    console.log(this.state.value)
  }
  addToDo() {
    this.state.todos.push({
      id: Date.now(),
      description: this.state.value
    });
    this.setState({
      todos: this.state.todos
    })
  }
  deleteTask(index) {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    });
  }
  render() {
    return (
        <div>
          <button onClick={this.show}>Test button</button>
          <AddToDo onShowClientInput={this.handleChange} onSubmit={this.addToDo}/>
          <ToDoList todos={this.state.todos} sendIndexForDelete={this.deleteTask}/>
        </div>
      );
  }
  
}

export default App;
// this.todos.push({
//   id: Date.now(),
//   description: this.state.value
// }