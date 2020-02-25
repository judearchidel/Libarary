import React from 'react';
import classes from './index.module.scss';

export const Button = (props) =>{ 

    const displayButton = ()=>{
        return <div>
                    <button className={classes.loginBtn} disabled={!props.isEnable}>
                        {props.children}
                    </button>
                </div>
    }
 
return displayButton();
    
}