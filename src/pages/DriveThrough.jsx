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
const taxiStopX = [650, 650, 650, 650, 650, 650]; // px offsets for where taxi "parks"
const driveDistance = 700; // how far the car drives off-screen before transitioning

export default function DriveThrough() {
  const [step, setStep] = useState(0);
  const [taxiX, setTaxiX] = useState(taxiStopX[0]);
  const [animating, setAnimating] = useState(false);
  const [roadMoving, setRoadMoving] = useState(false);

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
  
    const nextStep = step + 1;
    setAnimating(true);
    setRoadMoving(true); // Start road motion
    setStep(nextStep);   // 🔁 Trigger page scroll immediately
  
    setTaxiX(driveDistance); // Car starts moving
  
    setTimeout(() => {
      setTaxiX(taxiStopX[nextStep]); // Taxi returns and parks
      setAnimating(false);
    }, 1200);
  
    setTimeout(() => {
      setRoadMoving(false);
    }, 1500);
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
          transition={{ duration: 1.7, ease: "easeInOut" }}
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

        {/* Road */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "80px",
            backgroundColor: "#333",
            display: "flex",
            alignItems: "center",
            zIndex: 5,
            overflow: "hidden",
          }}
        >
          {/* Animated dashed line */}
          <motion.div
            animate={
              roadMoving ? { backgroundPositionX: ["0px", "-80px"] } : {}
            }
            transition={
              animating
                ? { duration: 0.1, ease: "linear", repeat: Infinity }
                : {}
            }
            style={{
              width: "100%",
              height: "6px",
              backgroundImage:
                "repeating-linear-gradient(to right, white 0px, white 40px, transparent 40px, transparent 80px)",
              backgroundSize: "160px 100%",
            }}
          />
        </Box>

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
        {step > 0 && (
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              left: 20,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* Back Button */}
            <button
              disabled={animating}
              onClick={handleReverseDrive}
              style={{
                background: "transparent",
                border: "none",
                color: "black",
                fontSize: "18px",
                cursor: animating ? "not-allowed" : "pointer",
              }}
            >
              ⬅ Back
            </button>

            {/* Start Over Button on Last Section */}
            {step === sections.length - 1 && (
              <button
                disabled={animating}
                onClick={() => {
                  setAnimating(true);
                  setTaxiX(-driveDistance); // drive off-screen left

                  setTimeout(() => {
                    setStep(0);
                    setTaxiX(taxiStopX[0]);
                    setAnimating(false);
                  }, 1200);
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontSize: "18px",
                  cursor: animating ? "not-allowed" : "pointer",
                }}
              >
                🔁 Start Over
              </button>
            )}
          </Box>
        )}
      </Box>
    </>
  );
}
