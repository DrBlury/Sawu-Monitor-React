import React from 'react'

import { TextField, Button, Card } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from "@material-ui/icons/Search";
import Cached from "@material-ui/icons/Cached";
import apiService from '../../../util/ApiService';

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
      marginTop: "1%",
      marginBottom: 12,
      align: "left"
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
const search = async () => {
  // Call the API
  // Update the state with the response
  console.log("Start...");
  try {
    const reponse = await apiService.client.get("/123");
    console.log({status: reponse.status});
  } catch (err) {
    console.error("Error is:", err);
  }
}

const searchbar = (props :any) => {
  const [searchType, setSearchType] = React.useState('value');

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
                value={searchType}
                id="standard-select-searchtypes" 
                label="Search type" 
                onChange={handleChange}
                helperText="Please select your search type"
                variant="outlined"
                fullWidth={true}
              >
                {searchTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            
            <Grid item xs>
              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField 
                    label="Search term"
                    fullWidth={true}
                  />
                </Grid>
                
                <Grid item xs={3}>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <Button 
                        className={classes.textfieldButton} 
                        variant="contained" 
                        color="primary"
                        onClick={search}>
                        Search
                        <SearchIcon/>
                      </Button>
                    </Grid>
                    
                    <Grid item xs>
                      <Button 
                        className={classes.textfieldButton} 
                        variant="contained" 
                        color="default">
                        Reload Events
                        <Cached/>
                      </Button>
                    </Grid>
                    
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  )
}

export default searchbar