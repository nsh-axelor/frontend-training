import { add, clear, remove, todoDone } from "../actions/actionType";

let newTodoId = 0
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case add:
      let newState = [
        ...state,
        { title: action.payload.title, id: newTodoId++, isDone:false },
      ];
      return newState;
    case remove:
      let newTodoState = [...state];
      newTodoState = newTodoState.filter(
        (todo) => todo.id !== action.payload.id
      );
      return newTodoState;
    case clear:
        return []
    case todoDone:
      let todos = [...state];
      todos[action.payload.id].isDone = !todos[action.payload.id].isDone 
      return todos
    default:
      return state;
  }
};
