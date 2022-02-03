import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { markAsDone, removeTodo } from "./actions/TodoActions";

function List({ data }) {
  const category = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  let $heading = useMemo(() => {
    return category === "incomplete"
      ? "Incomplete Todos"
      : category === "complete"
      ? "complete Todos"
      : "All todos";
  }, [category]);
  return (
    <>
      <h1>{$heading}</h1>
      <ul>
        {data.map(({ id, title, isDone }) => {
          return (
            <div key={id}>
              <li
                onClick={() => dispatch(markAsDone(id))}
                style={{ textDecoration: isDone ? "line-through" : "none" }}
              >
                {title}
              </li>
              <button onClick={() => dispatch(removeTodo(id))}>-</button>
              <button onClick={() => dispatch(markAsDone(id))}>
                Mark As Done
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default List;
