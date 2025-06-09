import React, { useState } from "react";
import Push1 from "../imgs/Push1.png";
import Push2 from "../imgs/Push2.jpeg";
import Push3 from "../imgs/Push3.jpeg";
import Pull1 from "../imgs/Pull1.jpeg";
import Pull2 from "../imgs/Pull2.jpeg";
import Pull3 from "../imgs/Pull3.webp";

import {
  Box,
  Typography,
  Modal,
  IconButton,
  Backdrop,
  Fade,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// Example data for three push factors
const pullFactors = [
  {
    title: "Demand for Low-Cost Migrant Labor",
    image: Pull1,
    gallery: [
      {
        src: Pull1,
        caption: "Construction laborers resting on site, Dubai (2023)",
      },
      {
        src: Push1,
        caption: "Underdeveloped village in Sindh, Pakistan",
      },
      {
        src: Push1,
        caption: "Street vendors earning <$5/day in Karachi",
      },
    ],
    description:
      "Limited economic opportunity, low wages, and lack of social mobility in Pakistan drive many to seek work abroad.",
    quotes: [
      "“I couldn’t afford basic necessities. Driving in Dubai was the only option to support my kids.” — Ahmed R.",
      "“I earned barely enough to survive back home.” — Bilal K.",
    ],
  },
  {
    title: "Accessible Employment with Immediate Income Potential",
    image: Pull2,
    gallery: [
      {
        src: Pull2,
        caption: "Construction laborers resting on site, Dubai (2023)",
      },
      {
        src: Pull1,
        caption: "Underdeveloped village in Sindh, Pakistan",
      },
      {
        src: Pull1,
        caption: "Street vendors earning <$5/day in Karachi",
      },
    ],
    description:
      "Many educated or skilled workers are unable to find stable jobs in Pakistan, pushing them to migrate.",
    quotes: [
      "“I was a school teacher for years, but there was no money in it.” — Bilal K.",
      "“My degree couldn’t get me anything back home.” — Faisal M.",
    ],
  },
  {
    title: "Supportive Recruitment Infrastructure",
    image: Pull3,
    gallery: [
      {
        src: Pull3,
        caption: "Construction laborers resting on site, Dubai (2023)",
      },
      {
        src: Pull1,
        caption: "Underdeveloped village in Sindh, Pakistan",
      },
      {
        src: Pull1,
        caption: "Street vendors earning <$5/day in Karachi",
      },
    ],
    description:
      "To migrate, many take loans from agents or family, creating a debt trap that forces them to work abroad under tough conditions.",
    quotes: [
      "“I borrowed money just to get the visa and flight.” — Faisal M.",
      "“Most of my pay goes to paying back the agent.” — Ahmed R.",
    ],
  },
];

export default function PullFactorCards() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex(index);
    setImageIndex(0); // start at first image in gallery
  };
  const handleClose = () => setOpenIndex(null);
  const [imageIndex, setImageIndex] = useState(0);



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 4,
        flexWrap: { xs: "wrap", md: "nowrap" },
        mt: 1,
        mb: 12,
      }}
    >
      {pullFactors.map((factor, i) => (
        <React.Fragment key={i}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Circle Image */}
            <Box
              onClick={() => handleOpen(i)}
              sx={{
                width: 360,
                height: 360,
                borderRadius: "50%",
                backgroundImage: `url(${factor.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: 3,
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />

            {/* Title Below Circle */}
            <Typography
              variant="subtitle1"
              sx={{ mt: 1, fontWeight: "bold", color: "#004d00" }}
            >
              {factor.title}
            </Typography>
          </Box>

          {/* Modal Popup */}
          <Modal
            open={openIndex === i}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
          >
            <Fade in={openIndex === i}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "white",
                  borderRadius: 3,
                  boxShadow: 6,
                  p: 4,
                  maxWidth: 500,
                  width: "90%",
                }}
              >
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <img
                    src={factor.gallery[imageIndex].src}
                    alt={`Slide ${imageIndex}`}
                    style={{
                      width: "100%",
                      maxHeight: "280px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: 8,
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ display: "block", color: "#006600", mb: 2 }}
                  >
                    {factor.gallery[imageIndex].caption}
                  </Typography>

                  <Box
                    sx={{ display: "flex", justifyContent: "center", gap: 2 }}
                  >
                    <IconButton
                      onClick={() =>
                        setImageIndex((prev) =>
                          prev === 0 ? factor.gallery.length - 1 : prev - 1
                        )
                      }
                    >
                      ←
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        setImageIndex((prev) =>
                          prev === factor.gallery.length - 1 ? 0 : prev + 1
                        )
                      }
                    >
                      →
                    </IconButton>
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#006600", mb: 1, fontWeight: "bold" }}
                >
                  {factor.title}
                </Typography>

                {/* 🟢 Make description green */}
                <Typography variant="body2" sx={{ mb: 2, color: "#006600" }}>
                  {factor.description}
                </Typography>

                {/* 🟢 Make quotes green */}
                <Box>
                  {factor.quotes.map((quote, qidx) => (
                    <Typography
                      key={qidx}
                      variant="body2"
                      sx={{ fontStyle: "italic", mb: 1, color: "#006600" }}
                    >
                      {quote}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Modal>
        </React.Fragment>
      ))}
    </Box>
  );
}
