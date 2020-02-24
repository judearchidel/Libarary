import React from 'react';


export const Button = (props) =>{ 

    const displayButton = ()=>{
        return <button>
                    {props.children}
                </button>
    }
 
return displayButton();
    
}