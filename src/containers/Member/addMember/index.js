import React, { useState } from 'react'
import classes from './index.module.scss'; 
import shortid from 'shortid';
import {Input} from '../../../components/UI/Input/index';
import * as actions from '../../../_store/action/index';
import {SearchCard } from '../../../components/UI/SearchCard/index'
import { connect } from 'react-redux';

export const InitalAddMembers = (props)=>{
const {onAddMember}={...props}
const intialMemberInputs = {
    Name: {
        key: shortid.generate(),
        type: 'text',
        value: '',
        required: true
    },
    Age: {
        key: shortid.generate(),
        type: 'number',
        value: '',
        required: true
    },
    Type: {
        key: shortid.generate(),
        type: 'select',
        value:'student',
        options: {
            options1: 'student',
            options2: 'employee'
        },
        required: true    
    },
    Address:{
        key: shortid.generate(),
        type: 'text',
        value: '',
        required: true
    }
}
const [memberInput,setMemberInput] = useState(intialMemberInputs);

const onInputChangeHandler =(e,inputName)=>{
    const newMemberInputs={
        ...memberInput,
        [inputName]:{
        ...memberInput[inputName],
        value: e.target.value
        }
    }
setMemberInput(newMemberInputs);
}

const dispalyFormInputs = ()=>{
    let formDetails=[];
    for (let el in memberInput){
        formDetails.push({
          inputName: el,
            config: memberInput[el]
        })
    }
   const mapInputofMember = formDetails.map(el=>{
       return <Input key={el.config.key} inputType={el.config.type} 
        value={el.config.value} 
        change={onInputChangeHandler} inputName={el.inputName}
        required={el.config.required}
        option={el.config.options}
        ></Input>
   }) 

   return mapInputofMember;
}


const rearrangeImputs=()=>{
    let finalMemberdata={}
    for (let el in memberInput){
        finalMemberdata={
            ...finalMemberdata,
            [el]: memberInput[el].value
        } 
    }
    finalMemberdata={
        ...finalMemberdata,
        id: shortid.generate(),
        issuedBooks: {
            count: 0,
            bookids:[]
        }
    }
    return finalMemberdata;
}
const submitAddMemberhandler =(e)=>{
    e.preventDefault();
    onAddMember(rearrangeImputs());
    setMemberInput(intialMemberInputs);
}

const displayAddform=()=>{
    const form = <form onSubmit={(e)=>submitAddMemberhandler(e)}>
                    {dispalyFormInputs()}
                    <button type='submit'> Add member</button>
                </form>
    return form;
}

    return (
        <div className={classes.memberAddForm}>
            <SearchCard>
                <h1>Add Member</h1>
                {displayAddform()}
            </SearchCard>
        </div>)
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onAddMember: (memberData)=>dispatch(actions.addMemeber(memberData))
    }
}
export const AddMembers = connect(null,mapDispatchToProps)(InitalAddMembers) 
