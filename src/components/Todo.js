import React, {useState} from 'react';

const Todo = ({text, todo, todos, setTodos}) => {

    const [todoText, setTodoText] = useState(text);

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
        //setTodoText(e.target.value);


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
                name="fname"
                type="text"
                value={todo.text}
                onChange={inputChanged}
            />

            <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    );

    // 'todo-item' == string
    // "todo-item" == string
    // {some js} e.g.
    // `` == template string -> evaluate stuff inside the `` to get the actual string
    // `${myname}` -> will evaluate myname and convert it into a string
    // var myname = "Sam"
    // `Hello ${myname}` ==> "Hello Sam"
    // Tertiary statement == question ? true : false
    // isValid ? "yes" : "no"

}

export default Todo;
