import { add, remove } from "../actions/actionType"

let currentId = 0
export const todoReducer = (state=[],action) => {
    switch(action.type){
        case add:
            let newState = [...state,{title:action.payload.title,id:currentId++}]
            return newState
        case remove:
            let newTodoState = [...state]
            newTodoState = newTodoState.filter((todo) => todo.id !== action.payload.id)
            return newTodoState
        default:
            return state
    }
}

