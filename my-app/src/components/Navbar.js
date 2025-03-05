import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Home Button */}
        <IconButton component={Link} to="/" color="inherit">
          <HomeIcon />
        </IconButton>
        
        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Democracy Platform
        </Typography>
        
        {/* Navigation Links */}
        <Button color="inherit" component={Link} to="/forum">Forum</Button>
        <Button color="inherit" component={Link} to="/polls">Polls</Button>
        <Button color="inherit" component={Link} to="/petitions">Petitions</Button>
        <Button color="inherit" component={Link} to="/volunteer">Volunteer</Button>
        <Button color="inherit" component={Link} to="/liveqa">Live Q&A</Button>
        
        {/* Dark Mode Toggle */}
        <IconButton color="inherit" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
