import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import styled from 'styled-components';
import CalendarList from './CalendarList';


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
                <TabsRe value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="일정" {...a11yProps(0)} style={{fontWeight: "bold"}}/>
                    <Tab label="후기" {...a11yProps(1)} style={{fontWeight: "bold"}}/>
                    {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </TabsRe>
            </Box>
            <TabPanel value={value} index={0}>
                {/* <CalendarList /> */}
            </TabPanel>
            <TabPanel value={value} index={1}>
                후기
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
                Item Three
            </TabPanel> */}
        </Box>
  );
}


const TabsRe = styled(Tabs)`
   & .css-heg063-MuiTabs-flexContainer {
        justify-content: space-around;
    }
`;