import { REGISTER } from "../actions/Action";
const initial={
    users:[]
}

const registerReducer=(state=initial,action)=>{
    switch(action.type){
        case REGISTER:
            return {
                ...state,
                users:[...state.users,action.payload]
            }
        default: return state
    }
}

export default registerReducer