import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import taxiImage from "../imgs/taxi.png";
import pakistanFlag from "../imgs/PakistanFlag.png";
import uaeFlag from "../imgs/UAEflag.png";
import { Container } from "@mui/material"; 
import { useRef, useLayoutEffect } from "react";
import Hayah from "../imgs/Hayah2.jpeg";
import Brendan from "../imgs/Brendan.jpeg";
import Shaik from "../imgs/Shaik.jpg";
import OverviewCards from "../components/OverviewCards.jsx";
import TeamSection from "../components/TeamSection.jsx";
import InterviewCards from "../components/InterviewCards.jsx";


const sections = [
  {
    title: "Start Exploring the Routes of Resilience",
    content: (
      <>
        <Typography variant="h4" sx={{ mb: 2 }}>
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
  {
    title: "Overview",
    content: (
      <>
        <OverviewCards />
        <Typography
          variant="h6"
          align="center"
          sx={{ mt: 3, mb: 1, color: "green" }}
        >
          Meet the Team
        </Typography>
        <TeamSection />
      </>
    ),
  },
  {
    title: "Interviews",
    content: (
      <>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            mb: 3,
            color: "#006600",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          These are real voices of Pakistani taxi drivers in Dubai. Their words
          reflect the sacrifices and hopes that fuel their journey.
        </Typography>
        <InterviewCards />
      </>
    ),
  },
  { title: "Push Factors", content: "Poverty, unemployment..." },
  { title: "Pull Factors", content: "UAE offers accessible jobs..." },
  { title: "Hardships", content: "Long hours, separation..." },
  {
    title: "Bibliography",
    content: (
      <Box
        sx={{
          px: 3,
          textAlign: "left",
          maxWidth: "1000px",
          fontSize: "1.15rem",
        }}
      >
        <Typography paragraph>
          <strong>1.</strong> Arif, G. M., and Rashid Amjad.{" "}
          <i>
            Migration Impact on Remittances: Special Focus on Gulf Countries – A
            Case Study of Pakistan.
          </i>{" "}
          Islamabad: Pakistan Institute of Development Economics, 2014.
        </Typography>
        <Typography paragraph>
          <strong>2.</strong> Mansuri, Ghazala.{" "}
          <i>
            Migration, School Attainment, and Child Labor: Evidence from Rural
            Pakistan.
          </i>{" "}
          World Bank Policy Research Working Paper No. 3945. Washington, DC:
          World Bank, 2006.
        </Typography>
        <Typography paragraph>
          <strong>3.</strong> Human Rights Watch. “Questions and Answers:
          Migrant Worker Abuses in UAE and COP28.” Human Rights Watch, December
          3, 2023.
        </Typography>
        <Typography paragraph>
          <strong>4.</strong> Walk Free. “United Arab Emirates.”{" "}
          <i>Global Slavery Index</i>, 2023.
        </Typography>
        <Typography paragraph>
          <strong>5.</strong> Ubaid, Hayah.{" "}
          <i>Interviews with Pakistani Taxi Drivers in Dubai.</i> Conducted
          online, 2025.
        </Typography>
      </Box>
    ),
  },
];

// Define the custom taxi stop points for each section
const taxiStopX = [540, 540, 540, 540, 540, 540]; // px offsets for where taxi "parks"
const driveDistance = 600; // how far the car drives off-screen before transitioning

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
                minHeight: "100vh",
                position: "relative", // Add this!
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f0fff0",
              }}
            >
              {/* Add flag to first section */}
              {i === 0 && (
                <>
                  <motion.img
                    src={pakistanFlag}
                    alt="Pakistan Flag"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 }}
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 0,
                      width: "clamp(180px, 30vw, 400px)",
                      height: "auto",
                      zIndex: 6,
                    }}
                  />

                  <motion.img
                    src={uaeFlag}
                    alt="UAE Flag"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 }}
                    style={{
                      position: "absolute",
                      bottom: 20,
                      right: 0,
                      width: "clamp(180px, 20vw, 300px)",
                      height: "auto",
                      zIndex: 6,
                    }}
                  />
                </>
              )}

              <Container maxWidth="md" sx={{ textAlign: "center", px: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'Times New Roman', serif",
                    color: "#006600",
                    mb: 2,
                    fontSize: { xs: "1.8rem", md: "2.5rem" },
                  }}
                >
                  {section.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "'Times New Roman', serif",
                    color: "#006600",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                >
                  {section.content}
                </Typography>
              </Container>
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
          <>
            {/* Back Button on the left */}
            <Box
              sx={{
                position: "absolute",
                bottom: 80,
                left: 0,
                zIndex: 10,
              }}
            >
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
            </Box>

            {/* Start Over Button on the right if on last step */}
            {step === sections.length - 1 && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 80,
                  right: 0,
                  zIndex: 10,
                }}
              >
                <button
                  disabled={animating}
                  onClick={() => {
                    setAnimating(true);
                    setTaxiX(-driveDistance);

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
              </Box>
            )}
          </>
        )}
      </Box>
    </>
  );
}
