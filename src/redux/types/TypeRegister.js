import { REGISTER } from "../actions/Action";

export const register=(user)=>{
    return {
        type:REGISTER,
        payload:user
    }
}