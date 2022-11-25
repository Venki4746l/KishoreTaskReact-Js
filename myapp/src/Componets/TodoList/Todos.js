import React from "react";
import { useState } from "react";
import './Todos.css'

const Todos = () => {
  const [task, setTask] = useState("");
  const [todoList, settodoList] = useState([]);
  const onchangeText = (event) => {
    setTask(event.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newList = [...todoList, task];
    settodoList(newList);
    setTask("");
  };
  const deletedTodo = (indexValue) => {
    console.log(indexValue)
    const updateList = todoList.filter((todo, index) => index !== indexValue);
    settodoList(updateList)
  };
  return (
    <center>
      <div className="card">
        <div className="card_body">
        <h5>Todo apllication</h5>
      <form onSubmit={onSubmitHandler}>
        <input  type="text" name="task" value={task} onChange={onchangeText} />{" "}
        &nbsp;&nbsp;
        <button type="submit" name="add">
          Add
        </button>
      </form>
      

        </div>
        {todoList.map((todo, index) => {
        return (
          <div className="Todo" key={index}>
           <h1>{index+1} {todo} &nbsp;&nbsp; <button onClick={()=>{
              deletedTodo(index)
            }}>Deleted</button></h1>
          </div>
        );
      })}
      </div>
      
    </center>
  );
};

export default Todos;

    

   