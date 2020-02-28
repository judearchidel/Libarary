import React from 'react'
import classes from './index.module.scss'; 
import { useSelector } from 'react-redux';

export const ViewAllMembers = ()=>{
    const memberdata = useSelector(state=>state.member);
    


    const displayMemberList = ()=>{
        const memberListRow = memberdata.map(el=>{
            return <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>{el.type}</td>
                    <td>{el.address}</td>
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







    return( <div>
            <h1>Member List</h1>
             <div>
                {displayMemberList()}
             </div>   
            </div>)
    }