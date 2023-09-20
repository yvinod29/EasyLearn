import React, { useState } from 'react';
import { AppBar, Button, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './SideBar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgb(51, 53, 69)' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '24px', marginLeft: '16px' }}>
            Easy Learn
          </Typography>
          <div>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#e14177',
                  color: 'white',
                  textTransform: 'none',  
                  '& .MuiButton-label': {
                    fontWeight: 'bold', 
                  },
                }}
              >
                SignIn
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar open={drawerOpen} onClose={toggleDrawer(false)} />
   
      <div style={{ paddingTop: '64px' }}>
       
      </div>
    </div>
  );
}

export default Header;
