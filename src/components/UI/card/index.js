import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './index.module.scss';

export const Card = (props) => {
    const {link,iconName,click}={...props}
return(<div className={classes.Card}>
        <div className={classes.CardBox} onClick={()=>click(link)}>
        <FontAwesomeIcon icon={iconName} className={classes.Icon}/>
        <p>{props.children}</p>
        </div>
    </div>
    )
}