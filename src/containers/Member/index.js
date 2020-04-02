import React, { useState, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Card} from '../../components/UI/card';
import {ViewAllMembers} from './viewAllMembers/index';
import {AddMembers} from './addMember/index';
import {RemoveMember} from './removeMember/index';
import { faBook,faSearchPlus, faExchangeAlt, faUsers, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './index.module.scss';
import { SearchCard } from '../../components/UI/SearchCard';
import { useSelector } from 'react-redux';

export const MemberDetails = (props) =>{
    const memberList         = useSelector(state=>state.member)
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
        return (
            <div className={classes.bookUserCount}>
                <div>
                <FontAwesomeIcon icon={faUsers} className={classes.Icon}/>
                </div>
                <div className={classes.bookUsercountText}>
                <p>Total users</p>
                <span>{count}</span>
                </div>
            </div>)
    }

    const displBookToReturn= ()=>{
        let total = 0;
            if(memberList.length){    
                const count= memberList.map(el => {
                return el.issuedBooks.count
            })
        total = count.reduce((sum,el)=>sum+el)
    }
    return (
        <div className={classes.bookUserCount}>
            <div>
            <FontAwesomeIcon icon={faAddressBook} className={classes.Icon}/>
            </div>
            <div className={classes.bookUsercountText}>
            <p>Books to return</p>
            <span>{total}</span>
            </div>
        </div>)
    }

    return (
        <Fragment>
            <div className={classes.Member}>
                {dispalyActions()}
                <div className={classes.MemberAction}>
                    <div className={classes.MemberActionHeading}>
                        {active?<h2>Member Details <span>Member {active}</span></h2>:<h2>Member Dashboard</h2>}
                    </div>
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




    
  