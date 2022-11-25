import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeTable from "./HomeTable";
import { Grid } from "@mui/material";
import "./HomeTab.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Trending" {...a11yProps(0)} />
          <Tab label="Top" {...a11yProps(1)} />
      
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
  <Grid container spacing={2}>
  <Grid item md={6} sm={12} xs={12}><HomeTable /></Grid>
  <Grid item md={6} sm={12} xs={12} className="Hometable-second"><HomeTable /></Grid>
  </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2}>
      <Grid item md={6} sm={12} xs={12}><HomeTable /></Grid>
      <Grid item md={6} sm={12} xs={12} className="Hometable-second"><HomeTable /></Grid>
      </Grid>
      </TabPanel>
    
    </Box>
  );
}
