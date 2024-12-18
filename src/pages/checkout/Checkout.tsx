import React from 'react'
import Grid from '@mui/material/Grid2';
import {Container,Typography,Box,Stepper,Step,StepLabel,StepContent,Button,Paper} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import DeliveryAddress from './DeliveryAddress';
import OrderSummry from './OrderSummry';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Checkout() {
    const theme:any = useTheme()
    const {checkOutPage} = theme

    const [value, setValue] = React.useState(0);
    const [activeStep, setActiveStep] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    
    const steps = [
        {
          label: 'Login',
          description: <LoggedIn/>
        },
        {
          label: 'Delivery Address',
          description:<DeliveryAddress/>
        },
        {
          label: 'Order Summary',
          description: 'An ad group contains one or more ads which target a shared set of keywords.',
        },
        {
            label: 'Payment',
            description: 'An ad group contains one or more ads which target a shared set of keywords.',
        },
    ];

    return (
        <Box sx={checkOutPage.checkoutBox}>
            <Container>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Paper>
                            <Box sx={checkOutPage.checkOutPaperBox}>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((step, index) => (
                                        <Step key={step.label}>
                                            <StepLabel >
                                                <Typography sx={checkOutPage.checkOutStepLable}>
                                                    {step.label}
                                                </Typography>
                                            </StepLabel>
                                            <StepContent>
                                                <Grid container>
                                                    <Grid size={12}>
                                                        {step.description}
                                                    </Grid>
                                                    <Grid size={12} sx={checkOutPage.checkOutPageStepContentContainerGridSecond}>
                                                        <Box>
                                                            { index !== 0 &&
                                                                <Button
                                                                    onClick={handleBack}
                                                                    sx={{mt:1,mr:1,color:"#000"}}
                                                                    disableElevation
                                                                >
                                                                    Back
                                                                </Button>
                                                            }
                                                            <Button
                                                                variant="contained" 
                                                                disableElevation
                                                                onClick={handleNext}
                                                                sx={checkOutPage.continueBtn}
                                                            >
                                                                {index === steps.length - 1 ? 'Pay' : 'Continue'}
                                                            </Button>
                                                            
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </StepContent>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid size={4}>
                        <OrderSummry/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
