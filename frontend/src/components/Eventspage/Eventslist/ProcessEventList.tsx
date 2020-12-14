import React, { Component } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ProcessEvent from './ProcessEvent'

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

const generateEvents = (props :any) => {
  return props.events.map((event :any, index :number) => {
      return <ProcessEvent 
        processName={event.name}
        status={event.status}
        open={() => event.open(event.id)}
        id={event.id}
        key={event.id}
      />
    })
}

const processEventList = (props :any) => {
  const classes = useStyles();

  {generateEvents(props)}

  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>InstanceID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Open</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {generateEvents(props)}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  )
}

export default processEventList