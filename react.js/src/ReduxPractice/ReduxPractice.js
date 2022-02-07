import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeCategoryClick, clearList } from "./actions/TodoActions";
import List from "./List";
import "./ReduxPractice.css";

const categorySelectStyle = { backgroundColor:"red",color:"white" }
const categories = [{type:"all",title:"All Todos"},{type:"incomplete",title:"Incomplete Todos"},{type:"complete",title:"Complete Todos"}]
const ReduxPractice = () => {
  const todoList = useSelector((state) => state.todoReducer);
  const category = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  let $todos = useMemo(() => {
    let todos = [...todoList];
    todos =
      category === "complete"
        ? (todos = todos.filter((todo) => todo.isDone))
        : category === "incomplete"
        ? (todos = todos.filter((todo) => !todo.isDone))
        : todos;
    return todos;
  }, [todoList, category]);

  return (
    <div className="todo-app">
    <h1>Todo Application</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter new to-do here"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <div className="todo-buttons">
          <button
            onClick={() => {
              setTodo("");
              dispatch(addTodo(todo));
            }}
            disabled={todo === "" ? true : false}
          >
            Add
          </button>
          <button
            onClick={() => {
              setTodo("");
              dispatch(clearList());
            }}
            disabled={todoList.length === 0}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="categories">
      {
        categories.map(({type,title}) => (
          <div style={category === type ?  categorySelectStyle: {}} onClick={() => dispatch(changeCategoryClick(type))}>
            {title}
          </div>
        ))
      }
      </div>
      <List data={$todos} />
    </div>
  );
};

export default ReduxPractice;
