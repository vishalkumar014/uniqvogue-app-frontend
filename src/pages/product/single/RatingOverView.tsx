import React from 'react'
import {Box, Typography,Chip} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import StarIcon from '@mui/icons-material/Star';

export default function RatingOverView() {
    const themes:any    = useTheme();
    const {singleProductPage}  = themes
    const handleDelete = () =>{}
    return (
        <Grid container mt={1} mb={1} alignItems={"center"}>
            <Grid size={1.5}>
                <Box>
                    <Chip className="unqRating" sx={singleProductPage.overAllRating} deleteIcon={<StarIcon />} onDelete={handleDelete} label="4.7" color="success" />
                </Box>
            </Grid>
            <Grid size={10}>
                <Box>
                    <Typography sx={singleProductPage.overAllRatingText}>
                        2,769 ratings and 89 reviews
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
