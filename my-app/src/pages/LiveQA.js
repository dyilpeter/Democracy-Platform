import React, { useState } from "react";
import { Container, Typography, Button, Card, CardContent, TextField, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const LiveQA = () => {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([
    "How can we ensure fair elections?",
    "What are the biggest challenges to democracy today?",
  ]);

  const handleAskQuestion = () => {
    if (question.trim()) {
      setQuestions([...questions, question]);
      setQuestion("");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Home Button */}
      <Button component={Link} to="/" variant="contained" color="primary" sx={{ mb: 2 }}>
        Home
      </Button>

      {/* Header */}
      <Typography variant="h4" gutterBottom>
        🎤 Live Q&A Sessions
      </Typography>
      <Typography variant="body1" paragraph>
        Join live discussions with experts, candidates, and activists.
      </Typography>

      {/* Upcoming Sessions */}
      <Card sx={{ mb: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h6">Upcoming Sessions</Typography>
          <List>
            <ListItem>
              <ListItemText primary="🗳️ Election Integrity - March 10, 7:00 PM" />
              <Button variant="contained" color="secondary">Join</Button>
            </ListItem>
            <ListItem>
              <ListItemText primary="📢 The Future of Democracy - March 15, 5:00 PM" />
              <Button variant="contained" color="secondary">Join</Button>
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Live Q&A Chat */}
      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h6">💬 Live Questions</Typography>
          <List>
            {questions.map((q, index) => (
              <ListItem key={index}>
                <ListItemText primary={q} />
              </ListItem>
            ))}
          </List>
          <TextField
            fullWidth
            label="Ask a question"
            variant="outlined"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleAskQuestion}>
            Submit Question
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LiveQA;

