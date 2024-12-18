import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

export default function SideBar() {
  const [open, setOpen] = React.useState(true);
  
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {/* cat */}
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="CATEGORIES" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Bottomwear" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Shirts & Tops" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* FIT */}
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="FIT" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox color="success" />
            </ListItemIcon>
            <ListItemText primary="Slim" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* SIZE */}
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="SIZE" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox color="success" />
            </ListItemIcon>
            <ListItemText primary="XS" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* COLOR */}
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="COLOR" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox color="success" />
            </ListItemIcon>
            <ListItemText primary="PINK" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox color="success" />
            </ListItemIcon>
            <ListItemText primary="BLUE" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox color="success" />
            </ListItemIcon>
            <ListItemText primary="RED" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* PRICE */}
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="PRICE" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox color="success" />
            </ListItemIcon>
            <ListItemText primary="500" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox color="success" />
            </ListItemIcon>
            <ListItemText primary="400" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox color="success" />
            </ListItemIcon>
            <ListItemText primary="300" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
