import React from 'react'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ProcessStepList from '../ProcessDetails/ProcessStepList'
        
const processEvent = (props :any) => {
  return (
    <TableRow key={props.id}>
      <TableCell component="th" scope="row">
        {props.id}
      </TableCell>
      <TableCell align="left">{props.processName}</TableCell>
      <TableCell align="left">{props.status}</TableCell>
      <TableCell align="left">
        <ProcessStepList/>
      </TableCell>
    </TableRow>
  );
}

export default processEvent