import React from 'react';


export const Input = (props) => {

    let validationText = null;
    if(!props.isValid && props.inputchanged){
        validationText =<p>enter a valid {props.inputType}</p>
    }
    const displayinput = () => {
                         switch (props.inputType) {
                            case 'Email':
                            return <input type='email' placeholder='email' 
                            value={props.value}
                            onChange={(event)=>props.change(event,props.inputType)}></input>    
                            case 'Password':
                            return <input type='password' placeholder='password' 
                            value={props.value}
                            onChange={(event)=>props.change(event,props.inputType)}></input>        
                            default:
                                return null;
                            }
                    }
    return  (
        <div>
        {displayinput()}
        {validationText}
        </div>)
            ;
            
}