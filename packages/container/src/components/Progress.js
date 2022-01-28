import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';

const usesStyles = makeStyles((theme) => {
  return createStyles({
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  })
})


export default () => {
  const classes = usesStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  )
};