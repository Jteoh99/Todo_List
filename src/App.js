// https://bueprintschool.notion.site/bueprintschool/Build-a-to-do-list-in-Reactjs-7fda0efe0b374dc08bd8ee04bfe3e238
// https://youtu.be/pCA4qpQDZD8?t=2564
// github: https://github.com/Jteoh99/Todo_List


import React, {useState} from 'react';
import './App.css'; // import styles
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // var myname = "Sam"
  // when myname changes, the UI does not re-render
  // When a STATE variable changes, the UI RE-RENDERS
  // Cannot set state variable using equal SIGN. MUST use setter.

  const [inputText, setInputText] = useState(''); // initializes inputText to empty string
  // to change inputText, setInputText("newthing");
  const [todos, setTodos] = useState([]); // initializes todos to an empty list or array
  // typical array ["Sam", "Dan", "Kelly"]
  // [{name: "Sam", title: "CEO"}, {name: "Kelly", title: "VP"}, {}
  //

  return (
    <div className="App">

      <header>
        <h1>Todo List</h1>
      </header>

      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos} />

  </div>
  );
}

export default App;
