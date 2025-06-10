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
import PushFactorCards from "../components/PushFactorCards.jsx";
import PullFactorCards from "../components/PullFactorCards.jsx";
import HardshipCarousel from "../components/HardshipCarousel.jsx";
import { Card, CardContent, Button } from "@mui/material";
import { useEffect} from "react";


const RemittanceQuizPopup = () => {
  const [flipped, setFlipped] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // 🔁 Delay showing the popup by 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const correctAnswer = "c";

  const handleAnswer = (option) => {
    setSelected(option);

    setTimeout(() => {
      setFlipped(true);
      setTimeout(() => setShowPopup(false), 5000); // hide 3s after flip
    }, 1000); // wait 1s to show highlights
  };

  if (!showPopup) return null;

  const getButtonStyles = (option) => {
    if (!selected) return {};

    if (option === correctAnswer) {
      return {
        borderColor: "green",
        color: "green",
      };
    }

    if (option === selected) {
      return {
        borderColor: "red",
        color: "red",
      };
    }

    return {};
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: 100,
        right: 30,
        zIndex: 20,
        perspective: 1000,
        width: "150px",
        height: "auto",
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        {/* FRONT */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            backfaceVisibility: "hidden",
            bgcolor: "#fff",
            border: "2px solid #006600",
            borderRadius: 2,
            boxShadow: 3,
            p: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#006600", mb: 1 }}
          >
            Do you know?
          </Typography>
          <Typography sx={{ fontSize: "0.95rem", mb: 2 }}>
            How much did Pakistan receive in remittances in 2012–2013?
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mb: 1, ...getButtonStyles("a") }}
            onClick={() => handleAnswer("a")}
            disabled={!!selected}
          >
            A. $5 billion
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mb: 1, ...getButtonStyles("b") }}
            onClick={() => handleAnswer("b")}
            disabled={!!selected}
          >
            B. $9 billion
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mb: 1, ...getButtonStyles("c") }}
            onClick={() => handleAnswer("c")}
            disabled={!!selected}
          >
            C. $13 billion
          </Button>
        </Box>

        {/* BACK */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            bgcolor: "#fff",
            border: "2px solid #006600",
            borderRadius: 2,
            boxShadow: 3,
            p: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              color: "#006600",
              mb: 1,
              fontSize: "1rem",
            }}
          >
            Correct Answer:
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontStyle: "italic", color: "#004d00" }}
          >
            Pakistan received over $13 billion in remittances in 2012 and 2013,
            making up more than 5% of its GDP.
          </Typography>
        </Box>
      </motion.div>
    </motion.div>
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
    title: "Overview",
    content: (
      <>
        <RemittanceQuizPopup />
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
            maxWidth: "1200px",
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
  {
    title: "Push Factors",
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
          Click on each factor to understand what drives migration from Pakistan
          — and hear firsthand how our interviewees experienced these
          challenges.
        </Typography>
        <PushFactorCards />
      </>
    ),
  },
  {
    title: "Pull Factors",
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
          Click on each factor to explore what draws migrants to the Gulf — and
          hear firsthand how the promise of opportunity shapes their journey.
        </Typography>
        <PullFactorCards />
      </>
    ),
  },
  {
    title: "Hardships & Issues",
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
          Below is a timeline of a Pakistani taxi driver’s journey to Dubai.
          Click on each stop to explore the challenges and hardships faced at
          each stage — from the decision to migrate to daily life in the UAE.
        </Typography>
        <HardshipCarousel />
      </>
    ),
  },
  {
    title: "Bibliography",
    content: (
      <Box
        sx={{
          px: 3,
          pt: -5,
          textAlign: "left",
          maxWidth: "1000px",
          fontSize: "1.15rem",
          height: "80vh", // limit height
          overflowY: "auto", // allow scrolling
          pr: 2, // padding-right to avoid clipping scroll
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
        <Typography paragraph>
          <strong>6.</strong> Aaj News. (2024, March 18).{" "}
          <i>Karachi street vendors help economy with no legal status</i>.
          <br />
          <a
            href="https://english.aaj.tv/news/30338001/karachi-street-vendors-help-economy-with-no-legal-status"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://english.aaj.tv/news/30338001/karachi-street-vendors-help-economy-with-no-legal-status
          </a>
        </Typography>

        <Typography paragraph>
          <strong>7.</strong> Al Jazeera. (2014, January 29).{" "}
          <i>In pictures: Pakistan’s education woes</i>.
          <br />
          <a
            href="https://www.aljazeera.com/gallery/2014/1/29/in-pictures-pakistans-education-woes"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://www.aljazeera.com/gallery/2014/1/29/in-pictures-pakistans-education-woes
          </a>
        </Typography>

        <Typography paragraph>
          <strong>8.</strong> Boone, J. (2010, December 27). Pakistan floods:
          Millions still homeless. <i>The Guardian</i>.
          <br />
          <a
            href="https://www.theguardian.com/lifeandstyle/2010/dec/27/pakistan-floods-millions-still-homeless"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://www.theguardian.com/lifeandstyle/2010/dec/27/pakistan-floods-millions-still-homeless
          </a>
        </Typography>

        <Typography paragraph>
          <strong>9.</strong> Siddiqui, Z. (2023, November 3). Migrants in UAE
          turn to crypto to send remittances home. <i>Context</i>.
          <br />
          <a
            href="https://www.context.news/digital-divides/migrants-in-uae-turn-to-crypto-to-send-remittances-home"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://www.context.news/digital-divides/migrants-in-uae-turn-to-crypto-to-send-remittances-home
          </a>
        </Typography>

        <Typography paragraph>
          <strong>10.</strong> Dawn. (2023, January 16).{" "}
          <i>Protest in Karachi against soaring inflation</i>.
          <br />
          <a
            href="https://www.dawn.com/news/1731487"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://www.dawn.com/news/1731487
          </a>
        </Typography>

        <Typography paragraph>
          <strong>11.</strong> DW News. (2023, January 9).{" "}
          <i>Pakistani taxi drivers in Dubai: Struggling to make a living</i>{" "}
          [Video]. YouTube.
          <br />
          <a
            href="https://www.youtube.com/watch?v=XHEgENVHllk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://www.youtube.com/watch?v=XHEgENVHllk
          </a>
        </Typography>

        <Typography paragraph>
          <strong>12.</strong> Encyclopaedia Britannica. (2023, August 2).{" "}
          <i>Pakistan floods of 2010</i>.
          <br />
          <a
            href="https://www.britannica.com/event/Pakistan-Floods-of-2010"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://www.britannica.com/event/Pakistan-Floods-of-2010
          </a>
        </Typography>

        <Typography paragraph>
          <strong>13.</strong> The Express Tribune. (2014, April 18).{" "}
          <i>Open air education – literally</i>.
          <br />
          <a
            href="https://tribune.com.pk/story/698518/open-air-education-literally"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://tribune.com.pk/story/698518/open-air-education-literally
          </a>
        </Typography>

        <Typography paragraph>
          <strong>14.</strong> Gulf News. (2024, May 6).{" "}
          <i>
            UAE job alert: Pakistan Consulate Dubai hosts career fair, offers
            jobs for Pakistani expats
          </i>
          .
          <br />
          <a
            href="https://gulfnews.com/uae/uae-job-alert-pakistan-consulate-dubai-hosts-career-fair-offers-jobs-for-pakistani-expats-1.500153042"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://gulfnews.com/uae/uae-job-alert-pakistan-consulate-dubai-hosts-career-fair-offers-jobs-for-pakistani-expats-1.500153042
          </a>
        </Typography>
        <Typography paragraph>
          <strong>15.</strong> Gannon, K. (2021, March 17). Pakistan’s poor push
          to Gulf for work amid pandemic. <i>AP News</i>.
          <br />
          <a
            href="https://apnews.com/article/lifestyle-business-health-pakistan-coronavirus-pandemic-ca85c6959b8559183612e61ccd6bea53"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://apnews.com/article/lifestyle-business-health-pakistan-coronavirus-pandemic-ca85c6959b8559183612e61ccd6bea53
          </a>
        </Typography>

        <Typography paragraph>
          <strong>16.</strong> Human Rights Watch. (2019, January 23).{" "}
          <i>
            No room to bargain: Unfair and abusive labor practices in Pakistan
          </i>
          .
          <br />
          <a
            href="https://www.hrw.org/report/2019/01/23/no-room-bargain/unfair-and-abusive-labor-practices-pakistan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://www.hrw.org/report/2019/01/23/no-room-bargain/unfair-and-abusive-labor-practices-pakistan
          </a>
        </Typography>

        <Typography paragraph>
          <strong>17.</strong> The News International. (2019, June 3).{" "}
          <i>Children shouldn't work in fields but on dreams</i>.
          <br />
          <a
            href="https://www.thenews.com.pk/magazine/you/485982-children-shouldnt-work-in-fields-but-on-dreams"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://www.thenews.com.pk/magazine/you/485982-children-shouldnt-work-in-fields-but-on-dreams
          </a>
        </Typography>

        <Typography paragraph>
          <strong>18.</strong> Mureithi, C. (2023, October 18). Job migration:
          Kenya’s exodus of workers to the Gulf States. <i>Africa Uncensored</i>
          .
          <br />
          <a
            href="https://africauncensored.online/blog/2023/10/18/migration-kenya/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://africauncensored.online/blog/2023/10/18/migration-kenya/
          </a>
        </Typography>

        <Typography paragraph>
          <strong>19.</strong> Nandi, S. (2024, April 15). Dubai UAE job vacancy
          2025 | Gulf job. <i>LinkedIn</i>.
          <br />
          <a
            href="https://www.linkedin.com/posts/subrat-nandi-58984b18a_dubai-uae-job-vacancy-2025-gulf-job-activity-7292400222255648768-55rE/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://www.linkedin.com/posts/subrat-nandi-58984b18a_dubai-uae-job-vacancy-2025-gulf-job-activity-7292400222255648768-55rE/
          </a>
        </Typography>

        <Typography paragraph>
          <strong>20.</strong> Ramadan, A. (2020, August 11). Migrant workers,
          health, and COVID-19 in GCC countries.{" "}
          <i>Arab Center Washington DC</i>.
          <br />
          <a
            href="https://arabcenterdc.org/resource/migrant-workers-health-and-covid-19-in-gcc-countries/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://arabcenterdc.org/resource/migrant-workers-health-and-covid-19-in-gcc-countries/
          </a>
        </Typography>

        <Typography paragraph>
          <strong>21.</strong> Safi, M. (2023, October 20). COP28 migrant
          workers in UAE face ‘intolerable conditions’ in extreme heat.{" "}
          <i>The Guardian</i>.
          <br />
          <a
            href="https://www.theguardian.com/environment/2023/oct/20/cop28-migrant-workers-uae-heat-climate-crisis"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006600", textDecoration: "underline" }}
          >
            https://www.theguardian.com/environment/2023/oct/20/cop28-migrant-workers-uae-heat-climate-crisis
          </a>
        </Typography>
        <Box sx={{ height: "100px" }} />
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
                    mt: section.title === "Bibliography" ? 8 : 0, // ⬅️ margin-top for Bibliography
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
