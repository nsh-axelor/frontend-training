import { add, clear, edit, remove } from "./actionType"

const addTodo = (title) => {
    return(
        {
            type:add,
            payload:{
                title,
            }
        }
    )
}

const removeTodo = (id) => {
    return({
        type:remove,
        payload:{
            id
        }
    })
}

const editTodo = (title,id) => {
    return({
        type:edit,
        payload:{
            title,
            id
        }

    })
}

const clearList = () => {
    return({
        type:clear
    })
}

export {addTodo,removeTodo,editTodo,clearList }