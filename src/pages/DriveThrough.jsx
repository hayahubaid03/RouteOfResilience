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

const CardItem = ({ title, body }) => (
  <Box
    sx={{
      width: { xs: "100%", sm: "45%", md: "22%" },
      bgcolor: "#e8f5e9",
      borderRadius: 2,
      boxShadow: 4,
      p: 2,
      textAlign: "left",
    }}
  >
    <Typography variant="h6" sx={{ color: "#2e7d32", mb: 1 }}>
      {title}
    </Typography>
    <Typography variant="body2" component="div">
      {body}
    </Typography>
  </Box>
);

const OverviewSection = () => {
  const containerRef = useRef(null);
  const topCardsContainerRef = useRef(null);
  const teamCardRef = useRef(null);
  const topCardRefs = [useRef(null), useRef(null), useRef(null)];
  const [cardCenters, setCardCenters] = useState([]);

  useLayoutEffect(() => {
    const updatePositions = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      const centers = topCardRefs.map((ref) =>
        ref.current
          ? ref.current.getBoundingClientRect().left +
            ref.current.getBoundingClientRect().width / 2 -
            (containerRect?.left ?? 0)
          : 0
      );
      setCardCenters(centers);

      // Position the team card to align with first and last top cards
      if (
        topCardRefs[0].current &&
        topCardRefs[2].current &&
        teamCardRef.current &&
        containerRef.current
      ) {
        const firstCard = topCardRefs[0].current;
        const lastCard = topCardRefs[2].current;
        const teamCard = teamCardRef.current;
        const mainContainer = containerRef.current;

        const firstCardRect = firstCard.getBoundingClientRect();
        const lastCardRect = lastCard.getBoundingClientRect();
        const mainContainerRect = mainContainer.getBoundingClientRect();

        // Calculate position to span from first card's left edge to last card's right edge
        // Adjust leftOffset to move the team card further left
        const leftOffset = firstCardRect.left - mainContainerRect.left - 32; // Move 32px left
        const rightEdge = lastCardRect.right - mainContainerRect.left - 32;
        const width = rightEdge - leftOffset;

        // Apply the positioning
        teamCard.style.marginLeft = `${leftOffset}px`;
        teamCard.style.width = `${width}px`;
        teamCard.style.marginRight = "0";
        teamCard.style.boxSizing = "border-box";
      }
    };

    // Use a timeout to ensure layout is complete
    const timeoutId = setTimeout(updatePositions, 0);

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => {
      window.removeEventListener("resize", updatePositions);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4 },
        pt: 4,
        pb: 20,
        bgcolor: "#f0fff0",
        position: "relative",
      }}
    >
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "'Times New Roman', serif",
            color: "#006600",
          }}
        >
          Overview
        </Typography>
      </Box>

      {/* Connector Lines */}
      {cardCenters.length === 3 && (
        <Box
          sx={{
            position: "absolute",
            top: 75,
            left: 0,
            width: "100%",
            height: 100,
            display: { xs: "none", md: "block" },
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              width: "2px",
              height: "40px",
              backgroundColor: "#006600",
              transform: "translateX(-50%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 30, // was 40
              left: cardCenters[0],
              width: cardCenters[2] - cardCenters[0],
              height: "2px",
              backgroundColor: "#006600",
            }}
          />
          {cardCenters.map((center, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                top: 30, //was 40
                left: center,
                width: "2px",
                height: "30px",
                backgroundColor: "#006600",
                transform: "translateX(-50%)",
              }}
            />
          ))}
        </Box>
      )}

      {/* Top 3 Cards */}
      <Box
        ref={topCardsContainerRef}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "stretch",
          gap: 10,
          mb: 2,
        }}
      >
        {[
          {
            title: "Why This Project?",
            body: "In the glittering city of Dubai, it's easy to overlook the migrant workers behind the wheel. We chose to spotlight Pakistani taxi drivers to understand their motivations, sacrifices, and challenges. This reflects global labor inequality.",
          },
          {
            title: "What You'll Explore",
            body: (
              <>
                <ul>
                  <li>What pushed them out of Pakistan</li>
                  <li>What pulled them into the UAE</li>
                  <li>The hardships they face daily</li>
                </ul>
                <br />
                Click the taxi to move through each chapter.
              </>
            ),
          },
          {
            title: "Our Hypothesis",
            body: "We believe that economic desperation, paired with an idealized image of the Gulf, pushes migrants to accept exploitative conditions in the UAE — a cycle sustained by debt, dependency, and hope.",
          },
        ].map((card, i) => (
          <Box
            key={i}
            ref={topCardRefs[i]}
            sx={{
              flex: 1.15,
              minWidth: "280px",
              maxWidth: "400px",
              bgcolor: "#e8f5e9",
              borderRadius: 2,
              boxShadow: 4,
              p: 4,
              textAlign: "left",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#2e7d32", mb: 1, fontWeight: "bold" }}
            >
              {card.title}
            </Typography>
            <Typography variant="body2" component="div">
              {card.body}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Our Team - positioned to align exactly with first and last cards */}
      <Box
        ref={teamCardRef}
        sx={{
          bgcolor: "#e8f5e9",
          borderRadius: 2,
          boxShadow: 4,
          p: 3,
          textAlign: "center",
          // Remove any default margins
          margin: 0,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#2e7d32", mb: 0.25, fontWeight: "bold" }}
        >
          Meet the Team
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {[Hayah, Brendan, Shaik].map((img, i) => {
            const names = ["Hayah Ubaid", "Brendan Wang", "Shaik Obaidullah"];
            const emails = [
              "hayahubaid2021@u.northwestern.edu",
              "brendanwang2027@u.northwestern.edu",
              "shaikobaidullah2028@u.northwestern.edu",
            ];
            const years = [
              "Northwestern University '26",
              "Northwestern University '27",
              "Northwestern University '28",
            ];
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flex: "1 1 30%",
                  minWidth: "260px",
                  gap: 2,
                }}
              >
                <img
                  src={img}
                  alt={names[i]}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center 30%",
                  }}
                />
                <Box sx={{ textAlign: "left" }}>
                  <Typography sx={{ fontWeight: "bold", color: "#006600" }}>
                    {names[i]}
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "#006600" }}>
                    {emails[i]}
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "#006600" }}>
                    {years[i]}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};



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
    //title: "Overview",
    content: <OverviewSection />
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
