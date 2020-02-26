import React from 'react';
import classes from './index.module.scss';

export const Input = (props) => {

    const {isValid,inputChanged,inputType,change,value,inputName}={...props}
    let validationText = null;
    if(!isValid && inputChanged){
        validationText =<p className={classes.validationText}>Enter a valid {inputType}</p>
    }
    const renderInput = (type)=>{
        return (
        <div className={classes.Input}>
            <span className={classes.floatingLabel}>{type} </span>    
            <input type={inputType} placeholder=''
                value={value}
                onChange={(event)=>change(event,type)}></input>
            {validationText}
        </div>);
    }
    const displayInputs = () => {
                         switch (inputType) {
                            case 'email':
                            return renderInput(inputName);   
                            case 'password':
                            return renderInput(inputName); 
                            case 'text':
                            return renderInput(inputName);
                            case 'number':
                            return renderInput(inputName)        
                            default:
                                return null;
                            }
                    }
    
    return displayInputs();
       
       
            
}