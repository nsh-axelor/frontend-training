import { changeCategory } from "../actions/actionType";

export const categoryReducer = (state="incomplete",action) => {
    switch(action.type){
        case changeCategory :
            return action.payload.category
        default:
            return state
    }
}
