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
export const memberIssue = (index,bookid)=>{
return{
    type:actionTypes.MEMBER_ISSUE,
    index: index,
    bookid: bookid
    }
}
export const memberReturn = (index,bookIdIndex)=>{
return{
    type: actionTypes.MEMBER_RETURN,
    index: index,
    bookIdIndex:bookIdIndex 
    }    
}
