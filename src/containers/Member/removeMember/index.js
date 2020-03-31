import React, { useState, Fragment } from 'react'
import classes from './index.module.scss' 
import { SearchCard } from '../../../components/UI/SearchCard'
import { useSelector, connect } from 'react-redux';
import * as actions from '../../../_store/action/index';
import { MemberSearch } from '../memberSearch';

 const InitialRemoveMember = (props)=>{
    const {onRemoveMember}={...props}
    const memberList = useSelector(state=>state.member);
    const [memberToDisplay,setMemberToDisplay]=useState('');


    const removeMemberHandler = (id)=>{
        const index= memberList.findIndex(el=> el.id===id)
        onRemoveMember(index);
    }

    const dispayMemebr =()=>{
       let show=null;
        if(memberToDisplay){
           show=<SearchCard>
                <p>Name: {memberToDisplay.Name}</p>
                <p>Memeber id: {memberToDisplay.id}</p>
                <p>Age: {memberToDisplay.Age}</p>
                <p>Address: {memberToDisplay.Address}</p>
                <p>Type: {memberToDisplay.Type}</p>
                <p>Books in hand: {memberToDisplay.issuedBooks.count}</p>
                <button onClick={()=>{removeMemberHandler(memberToDisplay.id)}}>Remove</button>
            </SearchCard>
        }
        return show;
    }
    const searchResult=(result)=>{
        setMemberToDisplay(result);
    }

    return( 
        <Fragment>
            <h1>Remove Member</h1>
            <div className={classes.removeMemberSearch}>
                <MemberSearch memberTodispay={searchResult}/>
            </div>
            <div className={classes.removeMemberDisplay}>
                {dispayMemebr()}
            </div>
        </Fragment>
        )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onRemoveMember: (index)=>dispatch(actions.removeMember(index))
    }
}

export const RemoveMember = connect(null,mapDispatchToProps)(InitialRemoveMember);