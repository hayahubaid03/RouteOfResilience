import React, { useState } from "react";
import { Box, Typography, Button, Modal, Fade } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; // <-- import arrow icon
import Issues1 from "../imgs/Issues1.jpeg";
import Issues2 from "../imgs/Issues2.jpeg";
import Issues3 from "../imgs/Issues3.jpeg";
import Issues4 from "../imgs/Issues4.png";
import Issues5 from "../imgs/Issues5.jpeg";

const stages = [
  "Deciding to Leave Pakistan",
  "Arriving in the UAE",
  "Starting Work",
  "Encountering Barriers",
  "Living in Dubai",
];

const hardships = [
  {
    title: "Debt Traps from Migration Expenses",
    image: Issues3,
    description:
      'Before departing, many Pakistani migrants take out loans to cover the substantial upfront costs...\n\n"I had to borrow money just to make it to Dubai..."\n— Interview with Pakistani taxi driver, Dubai',
  },
  {
    title: "Employer Control and Legal Dependency under the Kafala System",
    image: Issues1,
    description:
      "One of the most critical issues migrant workers face in the UAE is the structural imbalance of power created by the kafala (sponsorship) system...",
  },
  {
    title: "Exhausting Work Hours with Limited Labor Protections",
    image: Issues4,
    description:
      'Taxi drivers in the UAE often endure grueling 10- to 12-hour shifts...\n\n"I drive 10 to 12 hours a day..."\n— Interview with Pakistani taxi driver, Dubai',
  },
  {
    title:
      "Exploitation through Passport Confiscation, Wage Theft, and Debt Bondage",
    image: Issues5,
    description:
      "Beyond legal dependency, migrant workers in the UAE face widespread exploitation...",
  },
  {
    title: "Mental Health Struggles from Family Separation",
    image: Issues2,
    description:
      'Many migrant workers in the UAE live apart from their families for years at a time...\n\n"Being away from my family..."\n— Interview with Pakistani taxi driver, Dubai',
  },
];

export default function HardshipCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (index) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      {/* Timeline with arrows */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "nowrap",
          maxWidth: "1000px",
          mx: "auto",
          mb: 4,
          px: 2,
        }}
      >
        {hardships.map((item, i) => (
          <React.Fragment key={i}>
            <Button
              onClick={() => openModal(i)}
              sx={{
                minWidth: 120,
                mx: 1,
                my: 1,
                bgcolor: activeIndex === i ? "#a5d6a7" : "#e8f5e9",
                borderRadius: 2,
                boxShadow: 2,
                color: "#004d00",
                fontWeight: "bold",
                textTransform: "none",
                zIndex: 1,
              }}
            >
              {stages[i]}
            </Button>
            {i !== hardships.length - 1 && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: 1,
                }}
              >
                <svg width="60" height="12" viewBox="0 0 60 12">
                  <line
                    x1="0"
                    y1="6"
                    x2="50"
                    y2="6"
                    stroke="#006600"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <polygon points="50,2 58,6 50,10" fill="#006600" />
                </svg>
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>

      {/* Modal for selected hardship */}
      <Modal open={modalOpen} onClose={closeModal} closeAfterTransition>
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              p: 4,
              borderRadius: 3,
              boxShadow: 6,
              width: "90%",
              maxWidth: 600,
              textAlign: "center",
            }}
          >
            <img
              src={hardships[activeIndex].image}
              alt={hardships[activeIndex].title}
              style={{ width: "100%", borderRadius: 8, marginBottom: 16 }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#006600", fontWeight: "bold", mb: 2 }}
            >
              {hardships[activeIndex].title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#006600", whiteSpace: "pre-line" }}
            >
              {hardships[activeIndex].description}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
