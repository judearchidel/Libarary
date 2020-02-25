import React from 'react';
import {Hoc} from '../../hoc/hoc';
import { Navigation } from '../Navigation';
import classes from './index.module.scss';

export const Layout = (props) => {

    return (<Hoc>
        <Navigation></Navigation>
        <div className={classes.Content}>{props.children}</div>
      
        </Hoc>)
}