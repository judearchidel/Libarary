import * as actionTypes from './actionTypes';

export const addMemeber = (memberData)=>{
    return {
        type: actionTypes.MEMBER_ADD,
        memberData: memberData
    }
}
export const removeMember = (index)=>{
    return{
        type: actionTypes.MEMBER_REMOVE,
        index: index
    }
}