import * as actionTypes from './actionTypes';

export const auth=(email,password)=>{
   const authenticate= (email==='example@example.com' && password==='example')
        return {
            type:actionTypes.AUTH_USER,
            authenticate: authenticate
    }
}