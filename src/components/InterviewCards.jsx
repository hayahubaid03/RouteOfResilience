import React, { useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"; // ✅ Import back arrow

const interviewees = [
  {
    name: "Ahmed R.",
    age: 42,
    bio: "Originally from Lahore, Ahmed moved to Dubai in 2010 to support his family of six.",
    img: "/default-avatar.png",
    qa: [
      {
        q: "Why did you choose to come to Dubai?",
        a: "To escape poverty and find work to support my children’s education.",
      },
      {
        q: "What’s the hardest part of your job?",
        a: "Being away from my family and working long hours without rest days.",
      },
    ],
  },
  {
    name: "Bilal K.",
    age: 35,
    bio: "Bilal was a school teacher in Pakistan before switching careers to become a taxi driver in the Gulf.",
    img: "/default-avatar.png",
    qa: [
      {
        q: "What were your expectations before arriving?",
        a: "I thought it would be easy to earn and save, but most of it goes to rent and food.",
      },
      {
        q: "Would you recommend this job to others?",
        a: "Only if they understand the costs, risks, and emotional toll it brings.",
      },
    ],
  },
  {
    name: "Faisal M.",
    age: 28,
    bio: "Faisal arrived in 2023 with hopes of building a better life, but soon realized the challenges.",
    img: "/default-avatar.png",
    qa: [
      {
        q: "What surprised you most when you arrived?",
        a: "The loans we owe the agency were far more than I expected.",
      },
      {
        q: "What keeps you going?",
        a: "The dream of one day opening my own shop back home.",
      },
    ],
  },
];

export default function InterviewCards() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexWrap: { xs: "wrap", md: "nowrap" },
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        mt: 2,
        mb: 15,
      }}
    >
      {interviewees.map((person, idx) => (
        <InterviewCard key={idx} person={person} />
      ))}
    </Box>
  );
}

function InterviewCard({ person }) {
  const [qaIndex, setQaIndex] = useState(0);

  const nextQuestion = () => {
    setQaIndex((prev) => (prev + 1) % person.qa.length);
  };

  const prevQuestion = () => {
    setQaIndex((prev) => (prev - 1 + person.qa.length) % person.qa.length);
  };

  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: "#e8f5e9",
        borderRadius: 2,
        boxShadow: 2,
        p: 3,
        minWidth: "280px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Avatar
        src={person.img}
        alt={person.name}
        sx={{ width: 80, height: 80, mb: 1, mx: "auto" }}
      />
      <Typography variant="h6" color="green">
        {person.name}, {person.age}
      </Typography>
      <Typography variant="body2" sx={{ my: 1 }}>
        {person.bio}
      </Typography>

      <Box sx={{ mt: "auto", pt: 2, borderTop: "1px solid #ccc" }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>
          {person.qa[qaIndex].q}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {person.qa[qaIndex].a}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <IconButton
            onClick={prevQuestion}
            size="small"
            aria-label="Previous Q&A"
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={nextQuestion} size="small" aria-label="Next Q&A">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
