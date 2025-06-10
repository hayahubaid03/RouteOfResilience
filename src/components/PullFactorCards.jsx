import React, { useState } from "react";
import Push1 from "../imgs/Push1.png";
import Push2 from "../imgs/Push2.jpeg";
import Push3 from "../imgs/Push3.jpeg";
import Pull1 from "../imgs/Pull1.jpeg";
import Pull1_1 from "../imgs/Pull 1.1.jpeg";
import Pull1_2 from "../imgs/Pull 1.2.jpeg";
import Pull2 from "../imgs/Pull2.jpeg";
import Pull2_1 from "../imgs/Pull 2.1.jpeg";
import Pull2_2 from "../imgs/Pull 2.2.jpeg";
import Pull2_3 from "../imgs/Pull 2.3.jpeg";
import Pull3 from "../imgs/Pull3.webp";
import Pull3_1 from "../imgs/Pull 3.1.jpeg";
import Pull3_2 from "../imgs/Pull 3.2.jpeg";
import Pull3_3 from "../imgs/Pull 3.3.jpeg";

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
    image: Pull1_1,
    gallery: [
      {
        src: Pull1_1,
        caption:
          "Construction laborers work on a high-rise site in the Gulf under harsh conditions.",
      },
      {
        src: Pull1,
        caption:
          "Pakistani taxi driver in Dubai, representing the many migrant workers who fill essential roles in the Gulf’s booming transportation and service sectors.",
      },
      {
        src: Pull1_2,
        caption:
          "Migrant workers in blue uniforms walk through Dubai’s marina area.",
      },
    ],
    description:
      "The rapid growth of Gulf economies, particularly in construction, transportation, and services, has created a high demand for foreign workers. Arif and Amjad (2014) note that by the early 1980s, nearly 2 million Pakistanis had migrated to the region, filling jobs in both unskilled and semi-skilled sectors. Among skilled workers, roles like taxi driving, masonry, and tailoring were especially common. Dubai’s booming infrastructure and tourism industries continue to rely on affordable, flexible migrant labor to keep up with demand. Taxi drivers, in particular, are essential to the city’s public transportation system. This creates a consistent pipeline of job opportunities for Pakistani men with little formal training.",
    quotes: [
      "“Everyone from our village who goes abroad, they go to the Gulf, mostly Dubai. There’s always need for drivers, construction workers, cleaners. They don’t ask for high education. You just need to be willing to work. I knew if I got there, I’d find something.” — Bilal",
      "“When I got here, I realized how many Pakistanis were already part of the system. Taxis, deliveries, construction—you see our people everywhere. There’s always work for drivers if you’re willing to put in the hours.” — Waleed",
    ],
  },
  {
    title: "Accessible Employment with Immediate Income Potential",
    image: Pull2_1,
    gallery: [
      {
        src: Pull2_1,
        caption:
          "Pakistani taxi driver in Dubai smiles while waiting for passengers.",
      },
      {
        src: Pull2_2,
        caption:
          "Food delivery driver rides through Dubai streets on a motorbike.",
      },
      {
        src: Pull2_3,
        caption:
          "Migrant workers line up to withdraw cash from an ATM in the UAE.",
      },
    ],
    description:
      "Taxi driving in the UAE is considered one of the more accessible forms of employment for migrants with minimal education. Unlike other jobs that may require licensing, language proficiency, or specific skills, taxi driving can be learned relatively quickly and typically starts generating income soon after arrival. Although drivers are often paid on commission, the earnings potential is still significantly higher than what many could earn doing equivalent labor in Pakistan (Arif and Amjad 2014). This makes the job attractive to new migrants hoping to send remittances home right away and quickly begin repaying debts or supporting their families.",
    quotes: [
      "“I chose taxi work because it didn’t take much time to get started. No long interviews, no big requirements. Just training, and then I was on the road making a living.” — Ali",
      "“I didn’t have a fancy degree, but I could drive and in Dubai, that’s enough to start earning. After I got my license, I was working within weeks.” — Waleed",
    ],
  },
  {
    title: "Supportive Recruitment Infrastructure",
    image: Pull3_3,
    gallery: [
      {
        src: Pull3_1,
        caption:
          "Job seekers visit a Dubai Consulate career fair offering overseas employment opportunities.",
      },
      {
        src: Pull3_2,
        caption:
          "Poster advertises job openings in Dubai with promised salary and quick visa.",
      },
      {
        src: Pull3_3,
        caption:
          "Recruitment sign posted on a tree offers jobs in Dubai and other Gulf countries.",
      },
    ],
    description:
      "Over the years, Pakistan has institutionalized labor migration through formal recruitment systems and state-supported agencies. Arif and Amjad (2014) point out that the government actively promotes overseas employment to reduce domestic unemployment and generate remittance inflows. Dubai and other Gulf states have developed streamlined processes for hiring Pakistani labor through licensed agencies and bilateral agreements. This makes the pathway into jobs like taxi driving relatively smooth and well-understood, especially for those who know friends or relatives who have already taken the same route. These networks reduce the risk for new migrants and reinforce the popularity of migration to Dubai’s transportation sector.",
    quotes: [
      "“I acquired a visa with the help of a recruiting firm in Rawalpindi. I knew others who had used the same route to Dubai, so I felt confident it would work.” — Waleed",
      "“The recruiter from my area had already sent dozens of men abroad. He handled the paperwork, and I just followed the steps. It made the whole process less scary.” — Bilal",
      "“My cousin helped me connect with an agency thst walked me through the whole migration process. That kind of support made all the difference.” — Ali",
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
        gap: 12,
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
                width: 340,
                height: 340,
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
              sx={{ mt: 0.5, mb: 4, fontWeight: "bold", color: "#004d00" }}
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
                  maxWidth: 700,
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
