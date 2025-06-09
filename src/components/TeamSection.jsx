import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import Hayah from "../imgs/Hayah2.jpeg";
import Brendan from "../imgs/Brendan.jpeg";
import Shaik from "../imgs/Shaik.jpg";

const team = [
  {
    name: "Hayah Ubaid",
    email: "hayahubaid2021@u.northwestern.edu",
    gradYear: "’26",
    img: Hayah,
  },
  {
    name: "Brendan Wang",
    email: "brendanwang2027@u.northwestern.edu",
    gradYear: "’27",
    img: Brendan,
  },
  {
    name: "Shaik Obaidullah",
    email: "shaikobaidullah2028@u.northwestern.edu",
    gradYear: "’28",
    img: Shaik,
  },
];

export default function TeamSection() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        alignItems: "stretch",
        mt: 0.5,
        mb: 15,
      }}
    >
      {team.map((member, idx) => (
        <Box
          key={idx}
          sx={{
            flex: 1,
            bgcolor: "#e8f5e9",
            borderRadius: 2,
            boxShadow: 2,
            p: 2,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "250px",
          }}
        >
          <Avatar
            src={member.img}
            alt={member.name}
            sx={{ width: 80, height: 80, mb: 1 }}
          />
          <Typography fontWeight="bold" color="green" gutterBottom>
            {member.name}
          </Typography>
          <Typography variant="body2">{member.email}</Typography>
          <Typography variant="body2">
            Northwestern University {member.gradYear}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
