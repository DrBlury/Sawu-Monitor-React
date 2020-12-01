import React from 'react'

import { TextField, Button, Card } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import InputAdornment from "@material-ui/core/InputAdornment";


const searchTypes = [
  {
    value: 'pID',
    label: 'Search by ProcessInstanceID',
  },
  {
    value: 'value',
    label: 'Search by Value',
  }
];

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
  }),
);

const searchbar = (props :any) => {
  const [searchTerm, setSearchTerm] = React.useState('SearchTerm');
  const [searchType, setSearchType] = React.useState('SearchType');

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(event.target.value);
  };

  return (
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <TextField 
                select
                value={searchTypes}
                id="standard-select-searchtypes" 
                label="Search type" 
                onChange={handleChange}
                helperText="Please select your search type"
                variant="outlined"
              >
                {searchTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}

              </TextField>
            </Grid>
            <Grid item xs={2}>
              <TextField 
                id="standard-basic" 
                label="Search term"
              />
            </Grid>
            <Grid item xs>
                <Button 
                  className={classes.textfieldButton} 
                  variant="contained" 
                  color="primary">
                  <SearchIcon/>Search
                </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  )
}

export default searchbar