import { add, changeCategory, clear, remove, todoDone } from "./actionType"

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

const markAsDone = (id) => {
    return({
        type:todoDone,
        payload:{
            id
        }
    })
}

const clearList = () => {
    return({
        type:clear
    })
}


const changeCategoryClick = (category) => {
    return({
        type: changeCategory,
        payload:{
            category
        }
    })
}
export {addTodo,removeTodo ,clearList, markAsDone, changeCategoryClick }