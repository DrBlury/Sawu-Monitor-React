import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EmailIcon from '@material-ui/icons/Email';
import PeopleIcon from '@material-ui/icons/People';
import ExploreIcon from '@material-ui/icons/Explore';
import { ChangeHistoryRounded } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const actionsbar = (props :any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("explore");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    props.changed(newValue)
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<ExploreIcon />} label="Process explorer" value="explore"/>
        <Tab icon={<PeopleIcon />} label="User management" value="usermanagment"/>
        <Tab icon={<EmailIcon />} label="Dead letters" value="deadletters"/>
      </Tabs>
    </Paper>
  );
}

export default actionsbar