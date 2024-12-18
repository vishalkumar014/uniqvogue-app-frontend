import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box,List,ListItemButton,ListItemText  } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function DeliveryAddress() {
    const theme:any = useTheme()
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const {checkOutPage} = theme
    return (
        <Box>
            <Grid container>
                <Grid size={8}>
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                            sx={selectedIndex === 2&&checkOutPage.listBtn}
                        >
                            <ListItemText primary="Trash" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                            sx={selectedIndex === 3&&checkOutPage.listBtn}
                        >
                            <ListItemText primary="Spam" />
                        </ListItemButton>
                    </List>
                </Grid>  
            </Grid>
        </Box>
    )
}
