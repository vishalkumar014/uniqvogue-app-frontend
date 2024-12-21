import React from 'react'
import { Box,Container,Paper,Tabs,Tab,Divider} from '@mui/material'
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import { styled, } from '@mui/system';
import Logout from './Logout';


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
        {children}
        </Box>
      )}
    </Box>
  );
}

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const CustomTab = styled(Tab)(({}) => ({
  borderRadius:"8px",
  '&.MuiTab-textColorPrimary': {
    color: '#000',
    textTransform:"capitalize"
  },
  '&.Mui-selected':{
    color:"#fc2779"
  }
}));

export default function Dashboard() {
  const themes:any    = useTheme();
  const {mainLayOut,profile}  = themes
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={mainLayOut}>
      <Container maxWidth={"md"}>
        <Paper>
          <Grid container sx={profile.dashboard.paperGridContainer}>
            <Grid size={2}>
              <Box
                sx={{flexGrow:1,display:'flex'}}
              >
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                  <Divider/>
                  <CustomTab label="Account" {...a11yProps(1)} />
                  <Divider/>
                  <CustomTab label="Address" {...a11yProps(3)} />
                  <Divider/>
                  <CustomTab label="Order" {...a11yProps(5)} />
                  <Divider/>
                  <CustomTab label="Offer" {...a11yProps(7)} />
                  <Divider/>
                  <CustomTab label="Logout" {...a11yProps(9)} />
                  <Divider/>
                </Tabs>
              </Box>
            </Grid>
            <Grid size={10}>
              <Box>
                <TabPanel value={value} index={1}>
                  Item 1
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Item 2
                </TabPanel>
                <TabPanel value={value} index={5}>
                  Item 3
                </TabPanel>
                <TabPanel value={value} index={7}>
                  Item 4
                </TabPanel>
                <TabPanel value={value} index={9}>
                  <Logout/>
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}
