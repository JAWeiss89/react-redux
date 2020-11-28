import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/TodoList.css';




const TodoList = () => {
    
    const dispatch = useDispatch();
    const newTodoField = useSelector(store => store.newTodoField);
    const todos = useSelector(store => store.todos);
    const handleChange = (event) => dispatch({type: 'SETTODOFIELD', payload: event.target.value});
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'ADDTODO', payload: newTodoField});
        dispatch({type: 'SETTODOFIELD', payload: ''});
    }
    const removeTodo = (event) => {
        const todo=event.target.previousSibling.data;
        dispatch({type:'REMOVETODO', payload: todo});
    }
    return (
        <div className="TodoList">
            <h2>To-Do</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="todo" placeholder="Add Todo" onChange={handleChange} value={newTodoField}/>
                <button>Add</button>
            </form>
            <ul>
                {todos.map((todo) => <li key={todo}>{todo}<button onClick={removeTodo} className="TodoList-remove-btn">x</button></li>)}
            </ul>
        </div>
    )
}

export default TodoList;