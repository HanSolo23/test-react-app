import React from 'react'

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.sendIndexForDelete(this.props.index)
    }
    render() {
       return (
            <div>
                <li><span className="index">{ this.props.index + 1 }</span>{ this.props.todo.description }</li>
                <button onClick={this.handleClick}>Удалить</button>
            </div>
            
        ) 
    }
}

export default ToDoItem