import React from 'react'

class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }
    handleClick() {
      this.props.onShowClientInput(this.state.value)  
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.value.trim()) {
            this.props.onSubmit();
            this.setState({
                value: ''
            })
        } 
    }
    render() {
       return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button type="submit" onClick={this.handleClick}>Добавить</button>
            </form>
        ) 
    }    
}

export default AddToDo 