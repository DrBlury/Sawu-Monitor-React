import React, { Component } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ProcessStep from './ProcessStep'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "5%",
      marginBottom: 12,
      align: "center"
    },
    textfieldButton: {
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    table: {
      minWidth: 650,
    },
  }),
);

const generateSteps = (props :any) => {
  return props.steps.map((step :any, index :number) => {
    return <ProcessStep 
      timeStamp={step.timeStamp}
      stepName={step.name}
      status={step.status}
      edit={() => step.edit(step.id)}
      id={step.id}
      key={step.id}
    />
  })
}

const processStepList = (props :any) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Step Name</TableCell>
            <TableCell align="left">Retries</TableCell>
            <TableCell align="left">Actions</TableCell>
            <TableCell align="left">Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {generateSteps(props)}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default processStepList