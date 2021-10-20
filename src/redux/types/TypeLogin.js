import { LOGIN_ACTION } from "../actions/Action";
export const login=(user)=>{
    
    return {
        type:LOGIN_ACTION,
        payload:user
    }
    
}