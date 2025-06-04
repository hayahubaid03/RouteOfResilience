import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import taxiImage from "../imgs/taxi.png";

const sections = [
  {
    title: "Start Exploring the Routes of Resilience",
    content: (
      <>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Buckle up — you're about to experience the journey of thousands of
          Pakistani men who drive the streets of Dubai every day.
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "600px", margin: "0 auto" }}
        >
          Through this interactive experience, you’ll follow the footsteps of
          real migrants — exploring why they left, what they found, and what
          they sacrificed. <br />
          <br />
          Click the taxi below to start your journey.
        </Typography>
      </>
    ),
  },
  { title: "Overview", content: "This project explores..." },
  { title: "Push Factors", content: "Poverty, unemployment..." },
  { title: "Pull Factors", content: "UAE offers accessible jobs..." },
  { title: "Hardships", content: "Long hours, separation..." },
  { title: "Bibliography", content: "Arif, Amjad, HRW..." },
];

// Define the custom taxi stop points for each section
const taxiStopX = [650, 100, 250, 500, 300, 100]; // px offsets for where taxi "parks"
const driveDistance = 1000; // how far the car drives off-screen before transitioning

export default function DriveThrough() {
  const [step, setStep] = useState(0);
  const [taxiX, setTaxiX] = useState(taxiStopX[0]);
  const [animating, setAnimating] = useState(false);

  const handleReverseDrive = () => {
    if (step <= 0 || animating) return;

    setAnimating(true);
    setTaxiX(-driveDistance); // drive off-screen to the left

    setTimeout(() => {
      const prevStep = step - 1;
      setStep(prevStep);
      setTaxiX(taxiStopX[prevStep]); // park at previous step
      setAnimating(false);
    }, 1200);
  };

  const handleDrive = () => {
    if (step >= sections.length - 1 || animating) return;

    setAnimating(true);
    setTaxiX(driveDistance); // drive off-screen first

    setTimeout(() => {
      const nextStep = step + 1;
      setStep(nextStep);
      setTaxiX(taxiStopX[nextStep]); // taxi parks at next custom stop
      setAnimating(false);
    }, 1200);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Sliding sections */}
        <motion.div
          animate={{ x: `-${step * 100}vw` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            display: "flex",
            width: `${sections.length * 100}vw`,
            height: "100%",
          }}
        >
          {sections.map((section, i) => (
            <Box
              key={i}
              sx={{
                flex: "0 0 100vw",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f0fff0",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Times New Roman', serif",
                  color: "#006600",
                  mb: 2,
                  textAlign: "center",
                }}
              >
                {section.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Times New Roman', serif",
                  color: "#006600",
                  maxWidth: "700px",
                  textAlign: "center",
                }}
              >
                {section.content}
              </Typography>
            </Box>
          ))}
        </motion.div>

        {/* Taxi */}
        <motion.img
          src={taxiImage}
          alt="Taxi"
          onClick={handleDrive}
          animate={{ x: taxiX }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            width: "400px", // increase to your liking
            height: "auto",
            cursor: step < sections.length - 1 ? "pointer" : "default",
            zIndex: 10,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: 20,
            zIndex: 10,
          }}
        >
          <button
            disabled={step === 0 || animating}
            onClick={handleReverseDrive}
            style={{
              background: "transparent",
              border: "none",
              color: "black",
              fontSize: "18px",
              cursor: step === 0 || animating ? "not-allowed" : "pointer",
            }}
          >
            ⬅ Back
          </button>
        </Box>
      </Box>
    </>
  );
}
