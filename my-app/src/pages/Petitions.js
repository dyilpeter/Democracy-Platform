import React, { useState } from "react";
import { Container, Card, CardContent, Typography, Button, LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";

const Petitions = () => {
  const [petitions, setPetitions] = useState([
    {
      id: 1,
      title: "Protect Voting Rights",
      description: "Sign to ensure fair access to voting for all citizens.",
      signatures: 120,
      goal: 200,
    },
    {
      id: 2,
      title: "Ban Dark Money in Elections",
      description: "Support transparency in campaign funding and stop secret donations.",
      signatures: 90,
      goal: 150,
    },
  ]);

  const handleSign = (id) => {
    setPetitions((prevPetitions) =>
      prevPetitions.map((petition) =>
        petition.id === id
          ? { ...petition, signatures: petition.signatures + 1 }
          : petition
      )
    );
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h3" gutterBottom align="center">
        ✍️ Sign a Petition
      </Typography>
      {petitions.map((petition) => (
        <Card key={petition.id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              {petition.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              {petition.description}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(petition.signatures / petition.goal) * 100}
              style={{ height: 10, borderRadius: 5 }}
            />
            <Typography variant="body2" color="textSecondary" style={{ marginTop: 10 }}>
              {petition.signatures} / {petition.goal} Signatures
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}
              onClick={() => handleSign(petition.id)}
            >
              Sign Petition
            </Button>
          </CardContent>
        </Card>
      ))}
      
      {/* Home Button */}
      <Link to="/">
        <Button variant="contained" color="secondary" style={{ marginTop: "20px" }}>
          🏠 Home
        </Button>
      </Link>
    </Container>
  );
};

export default Petitions;
