import React from 'react';
import classes from './index.module.scss';

export const Input = (props) => {

    const {isValid,inputChanged,inputType,change,value}={...props}
    let validationText = null;
    if(!isValid && inputChanged){
        validationText =<p className={classes.validationText}>Enter a valid {inputType}</p>
    }
    const renderInput = (type)=>{
        return (
        <div className={classes.Input}>
            <span className={classes.floatingLabel}>{inputType} </span>    
            <input type={type} placeholder=''
                value={value}
                onChange={(event)=>change(event,inputType)}></input>
            {validationText}
        </div>);
    }
    const displayInputs = () => {
                         switch (inputType) {
                            case 'Email':
                            return renderInput('email');   
                            case 'Password':
                            return renderInput('password');        
                            default:
                                return null;
                            }
                    }
    
    return displayInputs();
       
       
            
}