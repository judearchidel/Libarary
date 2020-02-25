import * as actionTypes from '../action/actionTypes';

const intialState ={
    authenticated: false,
    error: null
};

export const authreducer =(state = intialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_USER:
        return {
            ...state,
            authenticated: action.authenticate,
            error: null
        }
        case actionTypes.AUTH_FAIL:
        return {
            ...state,
            authenticated: action.authenticate,
            error: 'INVALID PASSWORD OR EMAIL'
        }
        default:
            return state
    }
}