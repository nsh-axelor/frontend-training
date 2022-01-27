import { add, remove } from "./actionType"

const addTodoTest = (title) => {
    return(
        {
            type:add,
            payload:{
                title
            }
        }
    )
}

const removeTodoTest = (id) => {
    return({
        type:remove,
        payload:{
            id
        }
    })
}


export {addTodoTest,removeTodoTest}