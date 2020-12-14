import React from 'react'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Button } from '@material-ui/core';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';   
        
const processEvent = (props :any) => {
  return (
    <TableRow key={props.id}>
      <TableCell component="th" scope="row">
      {props.id}
      </TableCell>
      <TableCell align="left">{props.processName}</TableCell>
      <TableCell align="left">{props.status}</TableCell>
      <TableCell align="left"><Button variant="contained" color="primary" onClick = {props.open}>Open<OpenInBrowserIcon/></Button></TableCell>
    </TableRow>
  );
}

export default processEvent