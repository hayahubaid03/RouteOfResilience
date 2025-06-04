import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  FormControlLabel,
  Box,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isInteractive = location.pathname === "/drive";

  const handleToggle = () => {
    navigate(isInteractive ? "/resources" : "/drive");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgb(255, 251, 251)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Switch aligned to the left */}
        <FormControlLabel
          control={
            <Switch
              checked={isInteractive}
              onChange={handleToggle}
              color="success"
            />
          }
          label="Interactive View"
          labelPlacement="start"
          sx={{
            marginLeft: 1,
            color: "#006600",
            fontWeight: "bold",
            "& .MuiFormControlLabel-label": {
              fontFamily: "'Times New Roman', serif",
            },
          }}
        />

        {/* Title centered */}
        <Box sx={{ flexGrow: 1, textAlign: "center", marginRight: "56px" }}>
          <Typography
            variant="h2"
            sx={{
              color: "#006600",
              fontFamily: '"Times New Roman", Georgia, serif',
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
              marginY: 1,
            }}
          >
            Routes Of Resilience: The Journey of Pakistani Taxi Drivers in Dubai
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
