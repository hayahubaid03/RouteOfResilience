import React, { useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"; // ✅ Import back arrow

const interviewees = [
  {
    name: "Waleed",
    age: 30,
    bio: "Waleed moved to Dubai in 2015 after his family business in Rawalpindi collapsed. After early struggles, he found work in transport. Today, he drives full-time and supports others entering Dubai’s ride-hailing economy.",
    img: "/default-avatar.png",
    qa: [
      {
        q: "What led you to leave Pakistan?",
        a: '"I used to help run our family’s trading business in Rawalpindi. It was going well—until the political and economic conditions worsened in 2015. Trade restrictions hit us hard, and we had to shut down. That’s when I knew I had to look for options abroad."',
      },
      {
        q: "Why did you choose Dubai over other destinations?",
        a: '"Some friends suggested Europe, but going straight from Pakistan to a Western country isn’t easy without a strong network or finances. Dubai felt more accessible. I got a freelancer visa through a firm in Rawalpindi and took the leap."',
      },
      {
        q: "What’s the hardest part of your job?",
        a: '"Being away from my family and working long hours without rest days."',
      },
      {
        q: "How do you feel about life in Dubai today?",
        a: '"Dubai gives me a sense of security I didn’t have back home."',
      },
    ],
  },
  {
    name: "Bilal K.",
    age: 35,
    bio: "Bilal left school at 12 to work as a mechanic. After 2010 floods destroyed his family’s workshop, he saved for years before migrating to Dubai in 2018 through a recruiter. Now a full-time driver, he works long hours and shares a small room with five others to get by.",
    img: "/default-avatar.png",
    qa: [
      {
        q: "Why did you decide to leave Pakistan and move to Dubai?",
        a: '"After the floods, our workshop was gone. There was no way to rebuild. I worked odd jobs, but it wasn’t enough. I knew people who came to Dubai and managed, so I started saving. It took me years, but I finally made it."',
      },
      {
        q: "What were your expectations before arriving?",
        a: '"I thought it would be easy to earn and save, but most of it goes to rent and food."',
      },
      {
        q: "What was the biggest challenge you faced after arriving in Dubai?",
        a: '"Getting settled. I didn’t know anyone well. Rent was expensive, and I couldn’t afford my own room. I sleep in a shared space with five others. It’s still not easy, but we help each other out."',
      },
      {
        q: "Do you miss home?",
        a: '"Every day. My mother’s alone now since my father passed. But I send money every month. That’s what keeps me going, just knowing I can support her."',
      },
    ],
  },
  {
    name: "Ali",
    age: 41,
    bio: "Ali was a bus driver in Pakistan but struggled to earn enough to cover rent and school fees. Encouraged by a cousin, he migrated to Dubai in 2015 and transitioned to driving a taxi. Over time, he’s learned how to navigate both the city and the system but still misses home deeply.",
    img: "/default-avatar.png",
    qa: [
      {
        q: "What motivated you to leave Pakistan and come to Dubai?",
        a: '"I was a bus driver back home, but it wasn’t enough. After rent and school fees, there was nothing left. My cousin came to Dubai and said there were better opportunities here, so I decided to try."',
      },
      {
        q: "How was the transition from driving buses in Pakistan to taxis in Dubai?",
        a: '"The roads, the traffic, the rules all seemed different initially, but driving is something I know. Over time, I learned the city and how things work here. Now I can get anywhere without GPS."',
      },
      {
        q: "What’s been the hardest part of living in Dubai?",
        a: '"Being away from my family is the hardest part. I haven’t seen them in over six years. I talk to them on the phone, but it’s not the same. Every Eid, every birthday, I feel the distance."',
      },
      {
        q: "What keeps you going despite the homesickness?",
        a: '"My children’s future depends on me. They’re in school because of the money I send back to Pakistan. That’s what I’m doing this all for."',
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
        minWidth: "400px",
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
        sx={{ width: 40, height: 40, mb: 1, mx: "auto" }}
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
