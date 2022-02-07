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
      ? "Complete Todos"
      : "All todos";
  }, [category]);
  return (
    <div className="todo-list">
      {data.length === 0 ? (
        <h1>Selected list is empty</h1>
      ) : (
        <>
          <h1>{$heading}</h1>
          <ol>
            {data.map(({ id, title, isDone }) => {
              return (
                <div key={id} className="todo">
                  <li
                    onClick={() => dispatch(markAsDone(id))}
                    style={{ textDecoration: isDone ? "line-through" : "none" }}
                  >
                    {title}
                  </li>
                  <button
                    className="remove"
                    onClick={() => dispatch(removeTodo(id))}
                  >
                    -
                  </button>
                  <button onClick={() => dispatch(markAsDone(id))}>
                    Mark As Done
                  </button>
                </div>
              );
            })}
          </ol>
        </>
      )}
    </div>
  );
}

export default List;
