import React, { useState } from "react";
import Push1 from "../imgs/Push1.png";
import Push1_1 from "../imgs/Push1.1.jpeg";
import Push1_2 from "../imgs/Push 1.2.jpeg";
import Push1_3 from "../imgs/Push 1.3.jpeg";
import Push2_1 from "../imgs/Push 2.1.jpeg";
import Push2_2 from "../imgs/Push 2.2.jpeg";
import Push3_2 from "../imgs/Push 3.2.jpeg";
import Push3_3 from "../imgs/Push 3.3.jpeg";
import Push2 from "../imgs/Push2.jpeg";
import Push3 from "../imgs/Push3.jpeg";
import Pull1 from "../imgs/Pull1.jpeg";

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
const pushFactors = [
  {
    title: "Poverty and Lack of Decent Work Opportunities",
    image: Push1_3,
    gallery: [
      {
        src: Push1_3,
        caption: "Street vendors sell goods in Pakistan’s informal economy.",
      },
      {
        src: Push1_1,
        caption: "Children in Pakistan picking through garbage to survive.",
      },
      {
        src: Push1_2,
        caption:
          "Men in Pakistan working in a small, low-wage garment factory.",
      },
    ],
    description:
      " In rural Pakistan, widespread poverty and limited access to stable employment are key drivers of labor migration. Many families survive on informal or subsistence labor, which offers little room for financial advancement. As one study notes, more than one in four rural households includes at least one male migrant who has left in search of better work opportunities (Mansuri 2006). This migration is not random. It reflects a systematic failure to provide viable livelihoods in local communities. Another report echoes this by stating that poverty, unemployment, and lack of decent work are the primary reasons Pakistani men head abroad (Arif and Amjad 2014). For many, especially those with minimal education or training, migration becomes the only realistic option to support their families.",
    quotes: [
      "“I couldn’t afford basic necessities. Driving in Dubai was the only option to support my kids.” — Ali",
      "“I earned barely enough to survive back home.” — Bilal K.",
    ],
  },
  {
    title: "Low Educational Attainment and Barriers to Schooling",
    image: Push2,
    gallery: [
      {
        src: Push2,
        caption: "Overcrowded classroom in Pakistan with minimal resources.",
      },
      {
        src: Push2_1,
        caption: "Overcrowded classroom in Pakistan with minimal resources.",
      },
      {
        src: Push2_2,
        caption:
          "Girls in Pakistan attending class outside with no desks or shelter from the heat.",
      },
    ],
    description:
      "Another major push factor is the limited access to quality education, particularly in rural regions. Many school-age children in Pakistan contribute to household income through labor, as formal education is either inaccessible or unaffordable. Mansuri (2006) explains how migration indirectly improves schooling outcomes for children left behind, particularly girls, by alleviating financial burdens through remittances. However, the initial lack of education among adults, who then become migrant workers, reveals a deeper problem. Without formal education or marketable skills, men have few job prospects at home, making roles like taxi driving abroad more attractive despite the physical demands and personal sacrifices involved.",
    quotes: [
      "“II left school after 5th or 6th class because my father needed help in the shop. No one in my family ever went to college.” — Bilal K.",
      "“School was never really possible. I started working young and later got a license to drive buses. But even with experience, no education meant no chance at a better job back home.” — Ali",
      "“I finished matric and became a Hafiz. There weren’t many options beyond that for me.” — Waleed",
    ],
  },
  {
    title: "National Crises and Economic Instability",
    image: Push3,
    gallery: [
      {
        src: Push3,
        caption:
          "Aerial view of flood-hit homes in Pakistan, showing mass displacement.",
      },
      {
        src: Push3_2,
        caption:
          "A family wades through floodwaters after severe monsoon damage.",
      },
      {
        src: Push3_3,
        caption:
          "Protesters rally against inflation and IMF policies in Pakistan.",
      },
    ],
    description:
      "Economic shocks and environmental disasters also push men to migrate. For example, after the devastating 2010 floods, many Pakistani families lost their homes, crops, and sources of income. Arif and Amjad (2014) highlight how remittances served as a critical lifeline during this time, helping families rebuild. This reinforces the idea that in times of crisis, migration becomes a survival strategy. Combined with ongoing inflation, weak governance, and limited state support, these factors continue to make foreign labor markets, particularly in the Gulf, appear more stable and desirable in comparison.",
    quotes: [
      "“When the economy took a downturn, everything fell apart. Our trading business just couldn’t survive the restrictions and instability.” — Waleed",
      "“The floods in 2010 destroyed our entire workshop. All our tools, everything we had was gone overnight. We had no support, no compensation.” — Bilal",
      "“Prices kept rising in Pakistan, but my pay never did.” — Ali",
    ],
  },
];

export default function PushFactorCards() {
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
      {pushFactors.map((factor, i) => (
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
