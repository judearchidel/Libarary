import React, { useState } from 'react';
import {Input} from '../../components/UI/Input/index';
import {Button} from '../../components/UI/Button/index';
import shortid from 'shortid';
import { useSelector,connect } from 'react-redux';
import * as actions from '../../_store/action/auth';
 

const AuthPage = (props) => {
const authentic = useSelector(state => state.auth.authenticated);
const intialAuthFormValues = {
    Email:{
        key: shortid.generate(),
        value: '',
        validation:{
            required: true,
            condition: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        },
        valid: false,
        inputchanged: false
    },
    Password:{
        key: shortid.generate(),
        value:'',
        validation:{
            required: true,
            condition: /^[a-zA-Z0-9@_]{5,35}$/
        },
        valid: false,
        inputchanged: false
    }
}
const [loginInputs,setLoginInputs] = useState(intialAuthFormValues);
const checkValidity = (value, validations) =>{
                    let isvalid= false;
                    if(validations.required){
                        isvalid = value.trim() !== '';
                        if(validations.condition){
                                isvalid= validations.condition.test(value)
                            }
                        }
                    return isvalid;
                }
const onInputChangeHandler = (e,inputType)=>{
                        const newAuthFormValues= {
                        ...loginInputs,
                        [inputType]:{
                        ...loginInputs[inputType],
                        value: e.target.value,
                        valid: checkValidity(e.target.value,loginInputs[inputType].validation),
                        inputchanged: true
                        }
                    }
                    setLoginInputs(newAuthFormValues);
                } 

const  onAuthSubmitHandler = (event)=>{
    event.preventDefault();
  props.onAuth(loginInputs['Email'].value,loginInputs['Password'].value);
}

const dispalyForm =()=>{ 
                        let formdeatils=[];
                        for (let el in loginInputs){
                            formdeatils.push({
                                inputType: el,
                                config: loginInputs[el]
                            })
                        }
                    const mapformInputs = formdeatils.map((el,index)=>{
                        return <Input key={el.config.key} inputType={el.inputType} change={onInputChangeHandler} 
                        isValid={el.config.valid}  inputchanged={el.config.inputchanged} value={el.config.value}/>
                    }) 
                    const form = (
                         <form onSubmit={onAuthSubmitHandler}>
                                {mapformInputs}
                                <Button type='submit'>Log IN</Button>
                        </form>
                    )
                    return form;
                }
            

    return (<div>
                {dispalyForm()}
            </div>)
}

const mapDispatchProps = (dispatch) => {
    return {
        onAuth: (email,Password) => dispatch(actions.auth(email,Password)),
    };
};
export default connect(null,mapDispatchProps)(AuthPage);