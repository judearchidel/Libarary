import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './index.module.scss';

export const Card = (props) => {
    const {link,iconName,click,act}={...props}
return(<div className={act?classes.activeCard:classes.Card}>
        <div className={classes.CardBox} onClick={()=>click(link)}>
        <FontAwesomeIcon icon={iconName} className={classes.Icon}/>
        <p>{props.children}</p>
        </div>
    </div>
    )
}