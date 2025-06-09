import React from "react";
import { Box, Typography } from "@mui/material";

const cardData = [
  {
    title: "Why This Project?",
    body: "In the glittering city of Dubai, it's easy to overlook the migrant workers behind the wheel. We chose to spotlight Pakistani taxi drivers to understand their motivations, sacrifices, and challenges. This reflects global labor inequality.",
  },
  {
    title: "What You'll Explore",
    body: (
      <>
        <ul style={{ paddingLeft: "20px", marginTop: 0 }}>
          <li>What pushed them out of Pakistan</li>
          <li>What pulled them into the UAE</li>
          <li>The hardships they face daily</li>
        </ul>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Click the taxi to move through each chapter.
        </Typography>
      </>
    ),
  },
  {
    title: "Our Hypothesis",
    body: "We believe that economic desperation, paired with an idealized image of the Gulf, pushes migrants to accept exploitative conditions in the UAE — a cycle sustained by debt, dependency, and hope.",
  },
];

export default function OverviewCards() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: { xs: "wrap", md: "nowrap" },
        width: "100%",
        maxWidth: "1200px",
        flexDirection: { xs: "column", md: "row" },
        mt: 0.5,
        mb: 2,
      }}
    >
      {cardData.map((card, idx) => (
        <Box
          key={idx}
          sx={{
            bgcolor: "#e8f5e9",
            borderRadius: 2,
            boxShadow: 2,
            flex: 1,
            p: 2,
            textAlign: "left",
            minWidth: "250px",
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {card.title}
          </Typography>
          <Typography variant="body2" component="div">
            {card.body}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
