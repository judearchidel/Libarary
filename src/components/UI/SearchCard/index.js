import React from 'react';
import classes from './index.module.scss';

export const SearchCard = props => {
  return (
    <div className={classes.SearchCard}>
      {props.children}
    </div>
  );
}

