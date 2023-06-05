'use client';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const pages=["/","products"]

  const settings=["setting1", "setting 2"]

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Limitless
        </Typography>
        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            {pages.map((page) => (
              <Link key={page} href={page} className='m-1'>

                {page}

              </Link>
            ))}
          </>
        )}
        {isLoggedIn ? (
          <div>
            <IconButton
              color="inherit"
              onClick={handleOpenUserMenu}
              edge="end"
            >
              <Avatar alt="User Avatar" src="/user-avatar.jpg" />
            </IconButton>
            <Menu
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting}
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Link href="/login"><Button color="inherit" onClick={handleLogin}>
           Login
          </Button></Link> 
        )}
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleMenuClose}>
              {page}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </Container>
  </AppBar>
  );
};

export default Navbar;
