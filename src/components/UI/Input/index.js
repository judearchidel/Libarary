import React from 'react';
import classes from './index.module.scss';

export const Input = (props) => {
    const {
        isValid,
        inputChanged,
        inputType,
        change,
        value,
        inputName,
        required,
        option }        =   {...props}
    let validationText  =   null;
    
    if(!isValid && inputChanged){
        validationText  = <p className={classes.validationText}>Enter a valid {inputType}</p>
    }

    const renderInput = (type)=>{
        return (
            <div className={classes.Input}>
                <span className={classes.floatingLabel}>{type}</span>    
                <input type={inputType} placeholder=''
                    value={value}
                    onChange={(event)=>change(event,type)}
                    required={required}>
                </input>
            {validationText}
        </div>);
    }
    const renderSelect = (type)=>{
        const selectOptions= [];
        for (let el in option){
            selectOptions.push(<option key={el} value={option[el]}>{option[el]}</option>)
        }
    
        return(
            <div className={classes.Input}>
                <span className={classes.floatingLabel}>{type}</span>
                <div className={classes.select}>
                    <select onChange={(event)=>change(event,type)} required>
                        {selectOptions}
                    </select>
                </div>
            </div>
        )
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
            return renderInput(inputName); 
            case 'select':
            return renderSelect(inputName);       
            default:
            return null;
        }
    }
    
    return displayInputs();        
}