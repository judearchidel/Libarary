import React, { useState } from 'react';
import classes from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretUp,faCaretDown} from "@fortawesome/free-solid-svg-icons";

export const SelectInput = (props)=>{
    let dropitems= null;
    const {options,type,change}={...props}
    let dropclass= classes.noContent; 
    const [dropdown,setdropdown]=useState(false);
    const [selectedItem,setSelectedItem]= useState('');

    let arrow = <FontAwesomeIcon icon={faCaretDown}  className={classes.arrow}/>
    
    dropitems = options.map((item,Index) =>{
                    return <li value={item} 
                                key={Index} 
                                onClick={()=>selectHandler(item)}>
                                {item}
                            </li> 
                })

    const selectHandler=((item)=>     //function to close the dropdown if a item is selected
                {   
                    setSelectedItem(item);
                    change(item,type)   //refered to function to change the item selected
                    if(dropdown){
                                setdropdown(false);
                                 }
                 })


    const showContent = (e)=>      //open and close dropdown on click
                        {  
                            e.preventDefault();
                            setdropdown(!dropdown)
       
                        }
    if(dropdown)
            {
                dropclass= classes.dropContent;
                arrow=<FontAwesomeIcon icon={faCaretUp}  className={classes.arrow}/>
            }
    else{
             dropclass= classes.noContent; 
        }

    return(
                <div className={classes.dropdown}>
                    <button className={classes.button}  
                    onClick={(e)=>showContent(e)}>
                    {selectedItem?selectedItem:"Select an option "}
                    {arrow}
                    </button>
                    <div className={classes.dropBox}>
                    <ul className={dropclass}>
                        {dropitems}
                    </ul>
                    </div>
                </div>
        );
}