import * as actionTypes from './actionTypes';

export const auth=(email,password)=>{
        const authenticate= (email==='example@example.com' && password==='example')
        if(authenticate){
                return {
                        type:actionTypes.AUTH_USER,
                        authenticate: authenticate
                }
        }
        else{
                return{
                        type:actionTypes.AUTH_FAIL,
                        authenticate:authenticate
                }
        }
}

export const authLogOut = ()=>{
        return{
                type: actionTypes.AUTH_LOGOUT
        }
}