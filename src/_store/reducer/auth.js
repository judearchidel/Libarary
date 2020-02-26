import * as actionTypes from '../action/actionTypes';

const intialState ={
    authenticated: false,
    error: null,
    userid: null
};

export const authreducer =(state = intialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_USER:
        return {
            ...state,
            authenticated: action.authenticate,
            error: null,
            userid: 'Librarian'
        }
        case actionTypes.AUTH_FAIL:
        return {
            ...state,
            authenticated: action.authenticate,
            error: 'INVALID PASSWORD OR EMAIL',
            userid: null
        }
        case actionTypes.AUTH_LOGOUT:
            return{
                ...state,
                authenticated: false,
                error: null,
                userid:null
            }
        default:
            return state
    }
}