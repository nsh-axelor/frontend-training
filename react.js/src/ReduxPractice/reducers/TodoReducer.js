import { add, clear, edit, remove } from "../actions/actionType";

let newTodoId = 0
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case add:
      let newState = [
        ...state,
        { title: action.payload.title, id: newTodoId++ },
      ];
      return newState;
    case remove:
      let newTodoState = [...state];
      newTodoState = newTodoState.filter(
        (todo) => todo.id !== action.payload.id
      );
      return newTodoState;
    case edit:
      let editState = [];
      let exsistedTodoIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      editState = [...state];
      editState[exsistedTodoIndex].title = action.payload.title;
      return editState;
    case clear:
        return []
    default:
      return state;
  }
};
