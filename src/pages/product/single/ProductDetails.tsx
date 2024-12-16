import * as React from 'react';
import { AccordionDetails,Box, AccordionSummary,Accordion, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';

export default function ProductDetails() {
    const themes:any    = useTheme();
    const {singleProductPage}  = themes
    return (
        <div>
        <Accordion defaultExpanded sx={{boxShadow:'none',padding:"0px"}}>
            <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={singleProductPage.productDetailsTitle}
            >
                Product Details
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    <Grid container>
                        <Grid size={12} mb={2}>
                            <Grid container>
                                <Grid size={6}>
                                    <Typography sx={singleProductPage.productDetailsLable}>Color</Typography>
                                </Grid>
                                <Grid size={6}>
                                    <Typography>Black</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={12} mb={2}>
                            <Grid container>
                                <Grid size={6}>
                                    <Typography sx={singleProductPage.productDetailsLable}>Length</Typography>
                                </Grid>
                                <Grid size={6}>
                                    <Typography>Below Knee</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </AccordionDetails>
        </Accordion>
        </div>
    );
}
