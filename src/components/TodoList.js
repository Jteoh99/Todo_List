import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {
    return(
        <div className="todo-container">
        <ul className="todo-list">
        {todos.map(todo => (
            <Todo
                todo={todo}
                setTodos={setTodos} 
                todos={todos} 
                text={todo.text} 
                key={todo.id}/>
        ))}
        </ul>
        </div>
    );
};

export default TodoList;