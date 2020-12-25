import ToDoItem from '../todo/ToDoItem'

function ToDoList(props) {
    function sendIndexForDelete(index) {
        let value = index;
        props.sendIndexForDelete(value)
    }
    return (
        <ul className="bla">
            { props.todos.map((todo, index) => {
                return <ToDoItem key={todo.id} todo={todo} index={index} sendIndexForDelete={sendIndexForDelete}/>
            }) }
        </ul>
    );
}

export default ToDoList