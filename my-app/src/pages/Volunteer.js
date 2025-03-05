import React from "react";
import { Container, Typography, Button, Grid, Paper, TextField } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Volunteer = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* Home Button */}
      <Button
        variant="contained"
        startIcon={<Home />}
        onClick={() => navigate("/")}
        sx={{ position: "absolute", top: 20, left: 20 }}
      >
        Home
      </Button>

      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Become a Volunteer
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Join us in making a difference! Fill out the form below to sign up as a volunteer.
        </Typography>

        {/* Volunteer Form */}
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <TextField label="Full Name" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email Address" type="email" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone Number" type="tel" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Why do you want to volunteer?" multiline rows={4} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Volunteer;
