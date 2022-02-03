import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeCategoryClick, clearList } from "./actions/TodoActions";
import List from "./List";

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
    <div>
      <input
        type="text"
        placeholder="Enter new to-do here"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        onClick={() => {
          setTodo("");
          dispatch(addTodo(todo));
        }}
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
      <div onClick={() => dispatch(changeCategoryClick("all"))}>All</div>
      <div onClick={() => dispatch(changeCategoryClick("incomplete"))}>
        In-complete todo
      </div>
      <div onClick={() => dispatch(changeCategoryClick("complete"))}>
        Complete Todos
      </div>
      <List data={$todos} />
    </div>
  );
};

export default ReduxPractice;
