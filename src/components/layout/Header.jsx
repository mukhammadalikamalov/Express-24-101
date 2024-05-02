import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { NavLink } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#fff", boxShadow: "rgba(1, 1, 1, 0.1) 0px 5px 10px -10px", color: "#000" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box flex={1} paddingLeft={70} display="flex" gap={"20px"} alignItems="center">
            <NavLink to="/" style={{ textDecoration: 'none', color: '#000000' }}>Home</NavLink>
            <NavLink to="/about" style={{ textDecoration: 'none', color: '#000000' }}>About</NavLink>
            <NavLink to="/photos" style={{ textDecoration: 'none', color: '#000000' }}>Photos</NavLink>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
