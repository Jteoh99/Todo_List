import React, {useState} from 'react';

const Todo = ({text, todo, todos, setTodos}) => {


    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }

            return item;

        }))
    }
    const inputChanged = (e) => {
        console.log(e.target.value);
        
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, text: e.target.value}
            } else {
                return item;
            }
        }));


    }

    /* To edit the name of an item in the list, use input
     <input
         name="fname"
         type="text"
         value={todoText}
         onChange={inputChanged}
     />

     <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
     */


    return(
        <div className="todo">
            <input
                className={`todo-item ${todo.completed ? "completed" : ""}`}
                name="todoItem"
                type="text"
                value={todo.text}
                onChange={inputChanged}
            />

            <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    );

    // className='todo-item' == class name as a string
    // className="todo-item" == string, same as above
    // className={some js} -> uses Javascript code to set the class name
    // `` == template string -> evaluate stuff inside the `` to get the actual string
    // `${myname}` -> will evaluate myname and convert it into a string
    // let myname = "Sam"
    // `Hello ${myname}` ==> "Hello Sam"
    // Tertiary statement == question ? true : false
    // isValid ? "yes" : "no"

}

export default Todo;
