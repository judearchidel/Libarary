import React, { useEffect } from 'react';
import * as actions from '../../../_store/action/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Logout = (props)=>{
   const {onLogOut} ={...props}
   useEffect(()=>{
       onLogOut();
   },[onLogOut])
   
    return <Redirect to='/'/>

}

const matchDispatchToProps = (dispatch) => {
   return{
    onLogOut: ()=>dispatch(actions.authLogOut())
}
}

export const LogOut = connect(null,matchDispatchToProps)(Logout)