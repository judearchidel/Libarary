import * as actionTypes from '../action/actionTypes';

const intialState ={
    authenticated: false
};

export const authreducer =(state = intialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_USER:
        return {
            ...state,
            authenticated: action.authenticate
        }
        default:
            return state
    }
}