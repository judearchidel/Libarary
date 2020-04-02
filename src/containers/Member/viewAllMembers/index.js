import React from 'react'
import classes from './index.module.scss'; 
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const ViewAllMembers = ()=>{
    const memberdata         = useSelector(state=>state.member);
    const isMembersAvailable = memberdata.length;    

    const displayMemberList = ()=>{
        const memberListRow = memberdata.map(el=>{
            return <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.Name}</td>
                    <td>{el.Age}</td>
                    <td>{el.Type}</td>
                    <td>{el.Address}</td>
                    <td>{el.issuedBooks.count}</td>
                    <td><Link to={{
                        pathname: "/member/removemembers",
                        search:"?" + el.id
                        }}>
                            <button><FontAwesomeIcon icon={faTrashAlt} className={classes.Icon}/></button>
                        </Link>
                    </td>
            </tr>
        }) 
        return <table>
                    <thead>
                        <tr>
                            <th>Member id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Type</th>
                            <th>Address</th>
                            <th>Books in hand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {memberListRow}
                    </tbody>
                </table>
              
        }

    const noMemberToDispaly = ()=>{
        return <p>Plaease add some members</p>
    }

    return( <div className={classes.viewMembers}>
                <h1>Member List</h1>
                <div className={classes.viewTable}>
                    {isMembersAvailable?displayMemberList():noMemberToDispaly()}
                </div>   
            </div>)
    }