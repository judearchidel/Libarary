import React, { useState, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Card} from '../../components/UI/card';
import {ViewAllMembers} from './viewAllMembers/index';
import {AddMembers} from './addMember/index';
import {RemoveMember} from './removeMember/index';
import { faBook,faSearchPlus, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import classes from './index.module.scss';
import { SearchCard } from '../../components/UI/SearchCard';
import { useSelector } from 'react-redux';

export const MemberDetails = (props) =>{

const memberList = useSelector(state=>state.member)
const [active,setActive] = useState('');
const routes = <Switch>
            <Route path={props.match.url + '/viewmembers'} component={ViewAllMembers}/>
            <Route path={props.match.url + '/addmembers'} component={AddMembers}/>
            <Route path={props.match.url + '/removemembers'} component={RemoveMember}/>
        </Switch>

const dispalyActions = ()=>{
    const menu = <div className={classes.MemberMenu}>
        <Card iconName={faSearchPlus} link='/viewmembers' 
            act={active==='/viewmembers'}
            click={changeBooksAction}>View members</Card>
        <Card iconName={faBook} link='/addmembers' 
            act={active==='/addmembers'}
            click={changeBooksAction}>Add members</Card>
        <Card iconName={faExchangeAlt} link='/removemembers' 
            act={active==='/removemembers'}
            click={changeBooksAction}>Remove books</Card>
    </div>

return menu
}

const changeBooksAction=(link)=>{
    props.history.push(props.match.url + link);
    setActive(link);
}

const displayUserCount = ()=>{
const count = memberList.length;
return <p>Total number of users: {count}</p>
}

const displBookToReturn= ()=>{
let total = 0;
    if(memberList.length){    
const count= memberList.map(el => {
   return el.issuedBooks.count
})
total = count.reduce((sum,el)=>sum+el)
}
return <p>Books to return: {total}</p>
}

    return (
        <Fragment>
            <div className={classes.Member}>
                {dispalyActions()}
                <div className={classes.MemberAction}>
                    <h1>Member Details</h1>
                    <div className={classes.Dash}>
                        <SearchCard>
                            {displayUserCount()}
                        </SearchCard>
                        <SearchCard>
                            {displBookToReturn()}
                        </SearchCard>
                    </div>
                </div>
            </div>
            {routes}
        </Fragment>
        

    )
}




    
  