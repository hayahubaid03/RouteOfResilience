import React, { useState } from "react";
import taxiImage from "../imgs/taxi.png"; // replace with your taxi icon
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function TaxiNavigator({ currentTab, setTab }) {
  const [driving, setDriving] = useState(false);

  const nextTab = (currentTab + 1) % 5; // wrap around to first tab

  const handleClick = () => {
    setDriving(true);
    setTimeout(() => {
      setTab(nextTab);
      setDriving(false);
    }, 800); // sync with animation duration
  };

  return (
    <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 2000 }}>
      <AnimatePresence>
        {!driving && (
          <motion.img
            key="parked"
            src={taxiImage}
            alt="Taxi"
            onClick={handleClick}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
            transition={{ duration: 0.8 }}
            style={{ width: "80px", cursor: "pointer" }}
          />
        )}
        {driving && (
          <motion.img
            key="driving-back"
            src={taxiImage}
            alt="Taxi"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: "80px" }}
          />
        )}
      </AnimatePresence>
    </Box>
  );
}
