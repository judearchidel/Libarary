import React from 'react'
import classes from './index.module.scss'; 
import { useSelector } from 'react-redux';

export const ViewAllMembers = ()=>{
    const memberdata = useSelector(state=>state.member);
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

    return( <div>
            <h1>Member List</h1>
             <div className={classes.viewTable}>
                {isMembersAvailable?displayMemberList():noMemberToDispaly()}
             </div>   
            </div>)
    }