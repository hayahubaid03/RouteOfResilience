import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import { Box, Tabs, Tab, Typography, Grid } from "@mui/material";
import ClassCard from "../components/ClassCard";
import TrainingCard from "../components/TrainingCard";
import TradeCard from "../components/TradeCard";
import ContactCard from "../components/ContactCard";
import TaxiNavigator from "../components/TaxiNavigator";
import { collection, getDocs } from "firebase/firestore";
import placeholderImg from "../imgs/placeholder.jpeg";
import PakUAE from "../imgs/PakUAE.jpeg";
import Push1 from "../imgs/Push1.png";
import Push2 from "../imgs/Push2.jpeg";
import Push3 from "../imgs/Push3.jpeg";
import Pull1 from "../imgs/Pull1.jpeg";
import Pull2 from "../imgs/Pull2.jpeg";
import Pull3 from "../imgs/Pull3.webp";
import Hayah from "../imgs/Hayah2.jpeg";
import Brendan from "../imgs/Brendan.jpeg";
import Shaik from "../imgs/Shaik.jpg";
import Issues1 from "../imgs/Issues1.jpeg";
import Issues2 from "../imgs/Issues2.jpeg";
import Issues3 from "../imgs/Issues3.jpeg";
import Issues4 from "../imgs/Issues4.png";
import Issues5 from "../imgs/Issues5.jpeg";
import EventCard from "../components/EventCard";
import ThesisCard from "../components/ThesisCard";
//import { db } from "../services/firestoreConfig";

function TabPanel({ children, value, index, customSx = {} }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3, ...customSx }}>{children}</Box>}
    </div>
  );
}

const Resources = () => {
  const [tab, setTab] = useState(0);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "contacts"));
        const contactData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactData);
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };
    fetchContacts();
  }, []);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };


  const dummyEvents = [
    {
      id: 1,
      title: "Poverty and Lack of Decent Work Opportunities",
      date: "05/05/2025",
      description:
        "In rural Pakistan, widespread poverty and limited access to stable employment are key drivers of labor migration. Many families survive on informal or subsistence labor, which offers little room for financial advancement. As one study notes, more than one in four rural households includes at least one male migrant who has left in search of better work opportunities (Mansuri 2006). This migration is not random. It reflects a systematic failure to provide viable livelihoods in local communities. Another report echoes this by stating that poverty, unemployment, and lack of decent work are the primary reasons Pakistani men head abroad (Arif and Amjad 2014). For many, especially those with minimal education or training, migration becomes the only realistic option to support their families.\n\n“Back home in my village, there was no proper work. I worked some days on farms, other days doing labor, but it was never steady. Even after working full day, I couldn’t bring enough money home. I have three children, and I couldn’t see a future for them there. That’s when I decided I had to try Dubai, even if it meant starting from zero.”\n — Interview with Pakistani taxi driver, Dubai",
      image: Push1,
    },
    {
      id: 2,
      title: "Low Educational Attainment and Barriers to Schooling",
      date: "05/15/2025",
      description:
        "Another major push factor is the limited access to quality education, particularly in rural regions. Many school-age children in Pakistan contribute to household income through labor, as formal education is either inaccessible or unaffordable. Mansuri (2006) explains how migration indirectly improves schooling outcomes for children left behind, particularly girls, by alleviating financial burdens through remittances. However, the initial lack of education among adults, who then become migrant workers, reveals a deeper problem. Without formal education or marketable skills, men have few job prospects at home, making roles like taxi driving abroad more attractive despite the physical demands and personal sacrifices involved.\n\n“I only studied till 5th class. After that, my father asked me to help with the family work. School was far, and we couldn’t afford the fees. Most of the boys I grew up with also left school early. Without any degree or certificate, there were no proper jobs, so driving seemed like the only way to earn abroad.”\n — Interview with Pakistani taxi driver, Dubai",
      image: Push2,
    },
    {
      id: 3,
      title: "National Crises and Economic Instability",
      date: "05/06/2025",
      description:
        "Economic shocks and environmental disasters also push men to migrate. For example, after the devastating 2010 floods, many Pakistani families lost their homes, crops, and sources of income. Arif and Amjad (2014) highlight how remittances served as a critical lifeline during this time, helping families rebuild. This reinforces the idea that in times of crisis, migration becomes a survival strategy. Combined with ongoing inflation, weak governance, and limited state support, these factors continue to make foreign labor markets, particularly in the Gulf, appear more stable and desirable in comparison.",
      image: Push3,
    },
  ];

  const hardships = [
    {
      id: 1,
      title: "Employer Control and Legal Dependency under the Kafala System",
      date: "05/18/2025",
      description:
        "One of the most critical issues migrant workers face in the UAE is the structural imbalance of power created by the kafala (sponsorship) system, which ties a worker’s legal residency directly to their employer. This setup gives employers the authority to sponsor, cancel, or refuse to transfer a worker’s visa, effectively controlling their legal presence in the country. As a result, many workers become trapped in exploitative or abusive conditions, unable to leave their job without the employer’s permission or risk becoming undocumented. Even though reforms in 2021 introduced the possibility for workers to change jobs without employer consent, enforcement remains limited, and many workers are still unaware of or unable to access these protections (Human Rights Watch 2023). This dependency is especially harmful in labor sectors like taxi driving, where employment is often mediated through agencies or subcontractors, further complicating workers’ ability to advocate for their rights.",
      image: Issues1,
    },
    {
      id: 2,
      title: "Mental Health Struggles from Family Separation",
      date: "05/18/2025",
      description:
        "Many migrant workers in the UAE live apart from their families for years at a time, often sending remittances home while sacrificing emotional connection and daily presence in their loved ones’ lives. This long-term separation creates a persistent emotional toll that can lead to depression, loneliness, and a deep sense of isolation. Without access to affordable mental health support, community gathering spaces, or culturally sensitive counseling, many drivers are left to silently endure these struggles while navigating the pressures of work abroad. The absence of emotional support, combined with long hours and physical exhaustion, often compounds these feelings. \n\n “Being away from my family. I haven’t seen my wife and kids in 3 years. I miss them every day, but if I go home, I lose my income. There are days I feel so alone, but I keep going because they depend on me.”\n — Interview with Pakistani taxi driver, Dubai",
      image: Issues2,
    },
    {
      id: 3,
      title: "Debt Traps from Migration Expenses",
      date: "05/20/2025",
      description:
        "Before departing, many Pakistani migrants take out loans to cover the substantial upfront costs of recruitment agency fees, airfare, visa processing, and other migration-related expenses. These debts create immense pressure to succeed quickly abroad, as families back home are often relying on timely remittances to repay lenders. When work conditions are unstable or promised earnings don’t materialize, migrants can find themselves stuck in a cycle of repayment that lasts for years. This financial strain can lead to stress, burnout, and difficult decisions about whether to stay and endure harsh conditions or return home in deeper debt than when they left.\n\n “I had to borrow money just to make it to Dubai. Every month, I think about how much I owe, and it keeps me awake at night. But when I send money home and hear my children are doing well in school, I know it’s worth it.” \n — Interview with Pakistani taxi driver, Dubai",
      image: Issues3,
    },
    {
      id: 4,
      title: "Exhausting Work Hours with Limited Labor Protections",
      date: "05/21/2025",
      description:
        "Taxi drivers in the UAE often endure grueling 10- to 12-hour shifts, six or seven days a week, just to earn enough to cover basic living expenses and send money home. Most are paid on commission or must meet daily fare targets set by their employer or agency. If they fall short, they may not earn anything after expenses like fuel, vehicle rental, or company deductions. The physical and mental toll of such long hours, combined with the isolation of being far from home, is immense. \n\n “I drive 10 to 12 hours a day. Some days I don’t even get a proper break. If I don’t complete my target, I don’t earn. There’s no one to complain to. You just keep driving and hope nothing goes wrong.”\n— Interview with Pakistani taxi driver, Dubai",
      image: Issues4,
    },
    {
      id: 5,
      title:
        "Exploitation through Passport Confiscation, Wage Theft, and Debt Bondage",
      date: "05/21/2025",
      description:
        "Beyond legal dependency, migrant workers in the UAE face widespread exploitation through common practices like passport confiscation, delayed or unpaid wages, and high recruitment fees that can lead to debt bondage. Despite UAE laws prohibiting these practices, they remain widespread due to weak enforcement and limited accountability. Employers frequently withhold passports to restrict worker mobility, while others delay salaries or avoid paying them altogether. Recruitment agencies also charge illegal fees, forcing workers to borrow money or sell assets in order to migrate, only to find themselves locked into exploitative jobs to repay those debts. According to Walk Free, these practices contribute to conditions of modern slavery for thousands of workers in the UAE (Walk Free 2023). For taxi drivers from Pakistan, who often rely on commission-based pay and work long hours to meet daily targets, the lack of wage protections and freedom of movement can result in immense financial and psychological pressure.",
      image: Issues5,
    },
  ];

  const Hypotheses = [
    {
      id: 1,
      title: "Thesis",
      date: "05/05/2025",
      description:
        "This project hypothesizes that globalization has intensified labor migration from Pakistan to the UAE, where economic inequality and limited domestic opportunity push Pakistani men into taxi driving jobs that, while intended to support their families through remittances, often expose them to restricted rights under the UAE’s labor sponsorship system and personal hardships due to prolonged separation from loved ones.",
      image: PakUAE,
    },
  ];

  const pullfactors = [
    {
      id: 1,
      title: "Demand for Low-Cost Migrant Labor",
      date: "05/05/2025",
      description:
        "The rapid growth of Gulf economies, particularly in construction, transportation, and services, has created a high demand for foreign workers. Arif and Amjad (2014) note that by the early 1980s, nearly 2 million Pakistanis had migrated to the region, filling jobs in both unskilled and semi-skilled sectors. Among skilled workers, roles like taxi driving, masonry, and tailoring were especially common. Dubai’s booming infrastructure and tourism industries continue to rely on affordable, flexible migrant labor to keep up with demand. Taxi drivers, in particular, are essential to the city’s public transportation system. This creates a consistent pipeline of job opportunities for Pakistani men with little formal training.\n\n “Everyone from our village who goes abroad, they go to the Gulf, mostly Dubai. There’s always need for drivers, construction workers, cleaners. They don’t ask for high education. You just need to be willing to work. I knew if I got there, I’d find something.”\n — Interview with Pakistani taxi driver, Dubai",
      image: Pull1,
    },
    {
      id: 2,
      title: "Accessible Employment with Immediate Income Potential",
      date: "05/15/2025",
      description:
        "Taxi driving in the UAE is considered one of the more accessible forms of employment for migrants with minimal education. Unlike other jobs that may require licensing, language proficiency, or specific skills, taxi driving can be learned relatively quickly and typically starts generating income soon after arrival. Although drivers are often paid on commission, the earnings potential is still significantly higher than what many could earn doing equivalent labor in Pakistan (Arif and Amjad 2014). This makes the job attractive to new migrants hoping to send remittances home right away and quickly begin repaying debts or supporting their families.\n\n “Driving is one job where you can start earning quickly. No degree needed, just learn the routes and rules. After one month of training, I was already on the road. It’s hard work, but better than waiting months for paperwork like other jobs.”\n — Interview with Pakistani taxi driver, Dubai",
      image: Pull2,
    },
    {
      id: 3,
      title: "Supportive Recruitment Infrastructure",
      date: "05/06/2025",
      description:
        "Over the years, Pakistan has institutionalized labor migration through formal recruitment systems and state-supported agencies. Arif and Amjad (2014) point out that the government actively promotes overseas employment to reduce domestic unemployment and generate remittance inflows. Dubai and other Gulf states have developed streamlined processes for hiring Pakistani labor through licensed agencies and bilateral agreements. This makes the pathway into jobs like taxi driving relatively smooth and well-understood, especially for those who know friends or relatives who have already taken the same route. These networks reduce the risk for new migrants and reinforce the popularity of migration to Dubai’s transportation sector.\n\n “There’s a recruiter in Lahore who helped me apply. It cost money, but he took care of documents and interviews. Many people from my area had already gone through him, so it felt safe. He knew the taxi company here, so I trusted the process.”\n — Interview with Pakistani taxi driver, Dubai",
      image: Pull3,
    },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ pt: "112px", px: 2 }}>
        <Box
          sx={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            zIndex: 1000,
          }}
        >
          <Tabs
            value={tab}
            onChange={handleChange}
            centered
            sx={{
              mt: 2,
              mb: 3,
              borderBottom: 1,
              borderColor: "#444",
              "& .MuiTab-root": {
                color: "#aaa",
                textTransform: "uppercase",
                fontWeight: "bold",
                "&Mui-selected": {
                  color: "#F26B3A",
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#006600",
              },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Push Factors" />
            <Tab label="Pull Factors" />
            <Tab label="Issues and Personal Hardships" />
            <Tab label="Bibliography" />
          </Tabs>
        </Box>

        <Box sx={{ px: 2, pb: 5 }}>
          <TabPanel value={tab} index={0} customSx={{ mt: "10px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: "#006600",
                    fontSize: "1.3rem",
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  This project explores the journeys of Pakistani men who
                  migrate to UAE to work as taxi drivers. It looks at the reason
                  behind their decision to leave home, the challenges they faced
                  abroad, and the system that shaped their experiences.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: "#006600",
                    fontSize: "1.3rem",
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  In rural Pakistan, due to poverty, lack of jobs and limited
                  access to high quality education leave many families with few
                  options. For many men, migration to the gulf, especially
                  Dubai,becomes a necessary step to support their families. Low
                  income, inflation and higher expenses make the situation even
                  worse. On the other hand, the gulf countries offer steady
                  demand for cheap labor, especially in driving and some other
                  jobs which require no education.Taxi driving is often seen as
                  one the easier jobs to enter where drivers can start earning
                  quickly.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: "#006600",
                    fontSize: "1.3rem",
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  But behind this opportunity lies a tough reality. Many
                  migrants take in heavy debts just to get to the UAE. Once
                  there, they work long hours often 10 to 12 hours a day with
                  few rights or protections. Their legal status is tied to their
                  employer under the kafala system (sponsorship) system, leaving
                  them vulnerable to abuse, low pay, and exploitation. Many also
                  suffer silently from mental stress due to long term separation
                  from their families.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: "#006600",
                    fontSize: "1.3rem",
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  This project uses interviews with Pakistani drivers in Dubai
                  and research from sources to show both the hope and hardship
                  behind labor migration. By sharing real voices and real
                  struggles, it aims to lay out how these problems still exist
                  and are still carried out in huge numbers. Problems and
                  consequences for Pakistani drivers remain the same but
                  increase in labor migration has been taken into account even
                  today. After all knowing the struggles and hardship, people
                  still prefer to opt out not by their willingness but by the
                  necessities.
                </Typography>
                {Hypotheses.map((hypothesis) => (
                  <Grid item xs={12} key={hypothesis.id}>
                    <ThesisCard
                      title={hypothesis.title}
                      description={hypothesis.description}
                      image={hypothesis.image}
                    />
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{
                      fontFamily: "'Times New Roman', Times, serif",
                      fontWeight: "bold",
                      color: "#006600",
                      mt: 5,
                      mb: 2,
                    }}
                  >
                    Meet The Team
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      gap: 6,
                      mt: 2,
                    }}
                  >
                    {/* Team Member 1 */}
                    <Box sx={{ textAlign: "center" }}>
                      <img
                        src={Hayah}
                        alt="Team Member 1"
                        style={{
                          width: "160px",
                          height: "160px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          objectPosition: "center 30%",
                        }}
                      />
                      <Typography
                        sx={{
                          fontStyle: "italic",
                          fontWeight: "bold",
                          mt: 1,
                          color: "#006600",
                        }}
                      >
                        Hayah Ubaid
                      </Typography>
                      <Typography
                        sx={{ fontStyle: "italic", color: "#006600" }}
                      >
                        hayahubaid2021@u.northwestern.edu
                      </Typography>
                      <Typography
                        sx={{ fontStyle: "italic", color: "#006600" }}
                      >
                        Northwestern University ’26
                      </Typography>
                    </Box>

                    {/* Team Member 2 */}
                    <Box sx={{ textAlign: "center" }}>
                      <img
                        src={Brendan}
                        alt="Team Member 2"
                        style={{
                          width: "160px",
                          height: "160px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <Typography
                        sx={{
                          fontStyle: "italic",
                          fontWeight: "bold",
                          mt: 1,
                          color: "#006600",
                        }}
                      >
                        Brendan Wang
                      </Typography>
                      <Typography
                        sx={{ fontStyle: "italic", color: "#006600" }}
                      >
                        brendanwang2027@u.northwestern.edu
                      </Typography>
                      <Typography
                        sx={{ fontStyle: "italic", color: "#006600" }}
                      >
                        Northwestern University ’27
                      </Typography>
                    </Box>

                    {/* Team Member 3 */}
                    <Box sx={{ textAlign: "center" }}>
                      <img
                        src={Shaik}
                        alt="Team Member 3"
                        style={{
                          width: "160px",
                          height: "160px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          objectPosition: "center 30%",
                        }}
                      />
                      <Typography
                        sx={{
                          fontStyle: "italic",
                          fontWeight: "bold",
                          mt: 1,
                          color: "#006600",
                        }}
                      >
                        Shaik Obaidullah
                      </Typography>
                      <Typography
                        sx={{ fontStyle: "italic", color: "#006600" }}
                      >
                        shaikobaidullah2028@u.northwestern.edu
                      </Typography>
                      <Typography
                        sx={{ fontStyle: "italic", color: "#006600" }}
                      >
                        Northwestern University ’28
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tab} index={1}>
            <Typography
              variant="h6"
              paragraph
              sx={{
                color: "#006600",
                fontSize: "1.4rem",
                fontWeight: "bold",
                fontFamily: "'Times New Roman', Times, serif",
              }}
            >
              What drives Pakistani men to migrate to the UAE and pursue work as
              taxi drivers.
            </Typography>
            <Grid container spacing={2}>
              {dummyEvents.map((event) => (
                <Grid item xs={12} key={event.id}>
                  <EventCard
                    title={event.title}
                    date={event.date}
                    description={event.description}
                    image={event.image}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tab} index={2}>
            <Typography
              variant="h6"
              paragraph
              sx={{
                color: "#006600",
                fontSize: "1.4rem",
                fontWeight: "bold",
                fontFamily: "'Times New Roman', Times, serif",
              }}
            >
              What makes the UAE an appealing destination for Pakistani men
              seeking taxi driving work.
            </Typography>
            <Grid container spacing={2}>
              {pullfactors.map((event) => (
                <Grid item xs={12} key={event.id}>
                  <EventCard
                    title={event.title}
                    date={event.date}
                    description={event.description}
                    image={event.image}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tab} index={3}>
            <Typography
              variant="h6"
              paragraph
              sx={{
                color: "#006600",
                fontSize: "1.4rem",
                fontWeight: "bold",
                fontFamily: "'Times New Roman', Times, serif",
              }}
            >
              Challenges and personal hardships faced by Pakistani taxi drivers
              in the UAE.
            </Typography>
            <Grid container spacing={2}>
              {hardships.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <EventCard
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    image={item.image}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tab} index={4} customSx={{ mt: "-248px" }}>
            <Box sx={{ color: "#006600" }}>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  color: "#006600",
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                Bibliography
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "#006600",
                  fontSize: "1.3rem",
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                1. Arif, G. M., and Rashid Amjad.{" "}
                <i>
                  Migration Impact on Remittances: Special Focus on Gulf
                  Countries – A Case Study of Pakistan.
                </i>{" "}
                Islamabad: Pakistan Institute of Development Economics, 2014.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "#006600",
                  fontSize: "1.3rem",
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                2. Mansuri, Ghazala.{" "}
                <i>
                  Migration, School Attainment, and Child Labor: Evidence from
                  Rural Pakistan.
                </i>{" "}
                World Bank Policy Research Working Paper No. 3945. Washington,
                DC: World Bank, 2006.{" "}
                <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=923252"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#66CDAA" }}
                >
                  Read online
                </a>
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "#006600",
                  fontSize: "1.3rem",
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                3. Human Rights Watch. “Questions and Answers: Migrant Worker
                Abuses in UAE and COP28.” <i>Human Rights Watch</i>, December 3,
                2023.{" "}
                <a
                  href="https://www.hrw.org/news/2023/12/03/questions-and-answers-migrant-worker-abuses-uae-and-cop28"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#66CDAA" }}
                >
                  Read online
                </a>
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "#006600",
                  fontSize: "1.3rem",
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                4. Walk Free. “United Arab Emirates.”{" "}
                <i>Global Slavery Index</i>, 2023.{" "}
                <a
                  href="https://www.walkfree.org/global-slavery-index/country-studies/united-arab-emirates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#66CDAA" }}
                >
                  Read online
                </a>
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "#006600",
                  fontSize: "1.3rem",
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                5. Ubaid, Hayah.{" "}
                <i>Interviews with Pakistani Taxi Drivers in Dubai.</i>{" "}
                Conducted online, 2025.
              </Typography>
            </Box>
          </TabPanel>
        </Box>
      </Box>
      <TaxiNavigator currentTab={tab} setTab={setTab} />
    </>
  );
};

export default Resources;
