import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Card} from '../../components/UI/card';
import {ViewAllMembers} from './viewAllMembers/index';
import {AddMembers} from './addMember/index';
import {RemoveMember} from './removeMember/index';
import { faBook,faSearchPlus, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import classes from './index.module.scss';

export const MemberDetails = (props) =>{

const routes= <Switch>
<Route path={props.match.url + '/viewmembers'} component={ViewAllMembers}/>
<Route path={props.match.url + '/addmembers'} component={AddMembers}/>
<Route path={props.match.url + '/removemembers'} component={RemoveMember}/>
</Switch>

const changeBooksAction=(link)=>{
    props.history.push(props.match.url + link);
}
    return (
        <div className={classes.Member}>
    <div className={classes.MemberMenu}>
            <Card iconName={faSearchPlus} link='/viewmembers' click={changeBooksAction}>View members</Card>
            <Card iconName={faBook} link='/addmembers' click={changeBooksAction}>Add members</Card>
            <Card iconName={faExchangeAlt} link='/removemembers' click={changeBooksAction}>Remove books</Card>
        </div>
        <div className={classes.MemberAction}>
            {routes}
        </div>
    </div>
    )
}




    
  