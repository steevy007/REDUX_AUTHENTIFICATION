import { LOGIN_ACTION } from "../actions/Action";

const initialState = {
    isLogin:false,
    user:{
        username:'',
        password:''
    }
}

const login_reducers = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_ACTION:
            return {
                ...state,
                isLogin:true,
                user:action.payload
            }
        default:return state
    }
}

export default login_reducers