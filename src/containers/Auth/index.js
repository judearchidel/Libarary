import React, { useState } from 'react';
import {Input} from '../../components/UI/Input/index';
import {Button} from '../../components/UI/Button/index';
import shortid from 'shortid';
import { useSelector,connect } from 'react-redux';
import * as actions from '../../_store/action/auth';
import classes from './index.module.scss';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 

const Auth = (props) => {
    const error = useSelector(state=> state.auth.error)
    const intialAuthFormValues = {
        email:{
            key: shortid.generate(),
            value: '',
            validation:{
                required: true,
                condition: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            },
            valid: false,
            inputchanged: false
        },
        password:{
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
        props.onAuth(loginInputs['email'].value,loginInputs['password'].value);
    }

    const dispalyForm =()=>{ 
        let formDetails=[];
        for (let el in loginInputs){
            formDetails.push({
                inputType: el,
                config: loginInputs[el]
            })
        }
        let validityOfEachInput= [];
        const mapFormInputs = formDetails.map((el,index)=>{
            validityOfEachInput.push(el.config.valid);
            return <Input key={el.config.key} inputType={el.inputType} 
                    inputName={el.inputType}
                    change={onInputChangeHandler} 
                    isValid={el.config.valid}  
                    inputChanged={el.config.inputchanged} 
                    value={el.config.value}/>
        }) 
        const isLoginButtonActive= validityOfEachInput.every(el=>{
            return el===true;
        })
        const form = (
            <form onSubmit={onAuthSubmitHandler} className={classes.AuthForm}>
                <div>
                    <FontAwesomeIcon icon={faBookReader} className={classes.icon}/>
                    <h1>Welcome</h1>
                    <p className={classes.errorDisplay}>{error}</p>
                </div>
                {mapFormInputs}
                <Button type='submit' isEnable={isLoginButtonActive}>LOGIN</Button>
            </form>
        )
        return form;
    }
            
    return (
        <div className={classes.Auth}>
            {dispalyForm()}
        </div>
    )
}

const mapDispatchProps = (dispatch) => {
    return {
        onAuth: (email,Password) => dispatch(actions.auth(email,Password))
    };
};

export const AuthPage=connect(null,mapDispatchProps)(Auth);