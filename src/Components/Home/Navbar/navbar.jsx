import React, {useState} from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import {useNavigate } from "react-router-dom";
import {RenderIf} from "../Utils"

function Navbar({login, handleLogin,logout}) {


const settings = ['Logout'];


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    navigate("/");
  }



  return (
    <>
    <AppBar position="absolute" style={{ background: "#030504"}}>
        <Toolbar style={{ minHeight: "65px !important" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex" }}>
                <Link style={{display: "flex"}} to="/">
                <img src="/Images/logo.png" alt="Slide 1" style={{ width: "128px" }} />
                </Link>
            </Typography>
            <RenderIf predicate={logout}>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar style={{marginRight: 8, backgroundColor: "white"}} alt="Matias" src="images/matias.png" />
                <Typography color="white" variant="body1">
                Matias Adrian
              </Typography>
              </IconButton>
              
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleLogout}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

            </RenderIf>
      
                <Button onClick={handleLogin} size={"small"} variant="outlined" style={{ cursor: "pointer" }} color="inherit">
                    Regras
                </Button>
         
        </Toolbar>
    </AppBar>
                
    </>
  )
}

export default Navbar;




