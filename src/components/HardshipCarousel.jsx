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
      'Before departing, many Pakistani migrants take out loans to cover the substantial upfront costs of recruitment agency fees, airfare, visa processing, and other migration-related expenses. These debts create immense pressure to succeed quickly abroad, as families back home are often relying on timely remittances to repay lenders. When work conditions are unstable or promised earnings don’t materialize, migrants can find themselves stuck in a cycle of repayment that lasts for years. This financial strain can lead to stress, burnout, and difficult decisions about whether to stay and endure harsh conditions or return home in deeper debt than when they left.\n\n"I borrowed money from a relative to pay the recruiter and visa fees. Once I landed, every day felt like a race to earn and repay. "\n— Bilal \n\n"I had to borrow money just to make it to Dubai"\n— Waleed',
  },
  {
    title: "Employer Control and Legal Dependency under the Kafala System",
    image: Issues1,
    description:
      'One of the most critical issues migrant workers face in the UAE is the structural imbalance of power created by the kafala (sponsorship) system, which ties a worker’s legal residency directly to their employer. This setup gives employers the authority to sponsor, cancel, or refuse to transfer a worker’s visa, effectively controlling their legal presence in the country. As a result, many workers become trapped in exploitative or abusive conditions, unable to leave their job without the employer’s permission or risk becoming undocumented. Even though reforms in 2021 introduced the possibility for workers to change jobs without employer consent, enforcement remains limited, and many workers are still unaware of or unable to access these protections (Human Rights Watch 2023). This dependency is especially harmful in labor sectors like taxi driving, where employment is often mediated through agencies or subcontractors, further complicating workers’ ability to advocate for their rights. \n\n"Changing jobs or companies isn’t as simple as people think. I’ve seen friends try and get stuck without legal papers when their sponsor refused to transfer them. It’s a system that leaves you trapped."— Waleed',
  },
  {
    title: "Exhausting Work Hours with Limited Labor Protections",
    image: Issues4,
    description:
      'Taxi drivers in the UAE often endure grueling 10- to 12-hour shifts, six or seven days a week, just to earn enough to cover basic living expenses and send money home. Most are paid on commission or must meet daily fare targets set by their employer or agency. If they fall short, they may not earn anything after expenses like fuel, vehicle rental, or company deductions. The physical and mental toll of such long hours, combined with the isolation of being far from home, is immense.\n\n"Most days I’m on the road for 12 hours straight."\n— Ali\n\n"It’s exhausting. I leave early in the morning and return late at night."\n— Bilal',
  },
  {
    title:
      "Exploitation through Passport Confiscation, Wage Theft, and Debt Bondage",
    image: Issues5,
    description:
      'Beyond legal dependency, migrant workers in the UAE face widespread exploitation through common practices like passport confiscation, delayed or unpaid wages, and high recruitment fees that can lead to debt bondage. Despite UAE laws prohibiting these practices, they remain widespread due to weak enforcement and limited accountability. Employers frequently withhold passports to restrict worker mobility, while others delay salaries or avoid paying them altogether. Recruitment agencies also charge illegal fees, forcing workers to borrow money or sell assets in order to migrate, only to find themselves locked into exploitative jobs to repay those debts. According to Walk Free, these practices contribute to conditions of modern slavery for thousands of workers in the UAE (Walk Free 2023). For taxi drivers from Pakistan, who often rely on commission-based pay and work long hours to meet daily targets, the lack of wage protections and freedom of movement can result in immense financial and psychological pressure.\n\n"Sometimes salaries are delayed, and you just have to wait. You can’t argue, or they say leave the job—but you can’t leave either because your visa is tied to them. It’s a helpless feeling."\n— Ali',
  },
  {
    title: "Mental Health Struggles from Family Separation",
    image: Issues2,
    description:
      'Many migrant workers in the UAE live apart from their families for years at a time, often sending remittances home while sacrificing emotional connection and daily presence in their loved ones’ lives. This long-term separation creates a persistent emotional toll that can lead to depression, loneliness, and a deep sense of isolation. Without access to affordable mental health support, community gathering spaces, or culturally sensitive counseling, many drivers are left to silently endure these struggles while navigating the pressures of work abroad. The absence of emotional support, combined with long hours and physical exhaustion, often compounds these feelings. \n\n"Some nights, I lie awake just staring at the ceiling, thinking about my mother back home. I send money, but I can’t send my presence. That emptiness doesn’t go away."\n— Bilal\n\n"Being away from my family is the hardest part. I haven’t seen them in over six years. I talk to them on the phone, but it’s not the same. Every Eid, every birthday, I feel the distance."\n— Ali',
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
                minWidth: 210,
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
              maxWidth: 650,
              textAlign: "center",
            }}
          >
            <img
              src={hardships[activeIndex].image}
              alt={hardships[activeIndex].title}
              style={{ width: "100%", borderRadius: 8, marginBottom: 5 }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#006600", fontWeight: "bold", mb: 0.5 }}
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
