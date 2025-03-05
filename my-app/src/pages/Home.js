import React from "react";
import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Navbar />
      
      {/* Hero Section */}
      <Card sx={{ textAlign: "center", p: 5, mb: 4, bgcolor: "primary.light" }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          🏳️ Welcome to the Democracy Platform 🏳️
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Empowering citizens to unite and elect the right leaders.
        </Typography>
      </Card>

      {/* Featured Discussions */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        🔥 Featured Discussions
      </Typography>
      <Grid container spacing={3}>
        {["Election Security", "Voter Registration", "Campaign Transparency"].map((title, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ p: 3, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {index === 0 ? "Join the debate on securing our voting process." :
                   index === 1 ? "How can we improve voter turnout?" :
                   "Discuss how to hold leaders accountable."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button variant="text" sx={{ mt: 2 }}>See More</Button>

      {/* Upcoming Events */}
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        🗓 Upcoming Events
      </Typography>
      <ul>
        {["March 15 - Candidate Debate Night", "March 20 - Voter Registration Drive", "April 5 - Community Town Hall"].map((event, index) => (
          <li key={index}>
            <Typography variant="body1" color="text.secondary">{event}</Typography>
          </li>
        ))}
      </ul>
      <Button variant="text" sx={{ mt: 2 }}>See More</Button>

      {/* Trending Petitions */}
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        ✍️ Trending Petitions
      </Typography>
      <Grid container spacing={3}>
        {["Protect Voting Rights", "Ban Dark Money in Elections"].map((title, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ p: 3, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {index === 0 ? "Sign to ensure fair access to voting." : "Support transparency in campaign funding."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button variant="text" sx={{ mt: 2 }}>See More</Button>
      
      <Footer />
    </Container>
  );
};

export default Home;
