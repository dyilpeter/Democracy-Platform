import React, { useState } from "react";
import { Container, Typography, Card, CardContent, Button, LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";

const Polls = () => {
  const [polls, setPolls] = useState([
    {
      id: 1,
      question: "Who should lead the next government?",
      options: [
        { text: "Candidate A", votes: 10 },
        { text: "Candidate B", votes: 20 },
        { text: "Candidate C", votes: 5 },
      ],
    },
    {
      id: 2,
      question: "What is the most important issue for you?",
      options: [
        { text: "Education", votes: 15 },
        { text: "Healthcare", votes: 30 },
        { text: "Climate Change", votes: 25 },
      ],
    },
  ]);

  const handleVote = (pollId, optionIndex) => {
    const updatedPolls = polls.map((poll) => {
      if (poll.id === pollId) {
        const updatedOptions = poll.options.map((option, index) => {
          return index === optionIndex
            ? { ...option, votes: option.votes + 1 }
            : option;
        });
        return { ...poll, options: updatedOptions };
      }
      return poll;
    });
    setPolls(updatedPolls);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        🗳️ Current Polls
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary" sx={{ mb: 3 }}>
          Home
        </Button>
      </Link>
      {polls.map((poll) => (
        <Card key={poll.id} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {poll.question}
            </Typography>
            {poll.options.map((option, index) => (
              <div key={index}>
                <Button
                  variant="outlined"
                  sx={{ my: 1 }}
                  onClick={() => handleVote(poll.id, index)}
                >
                  {option.text}
                </Button>
                <LinearProgress
                  variant="determinate"
                  value={(option.votes / poll.options.reduce((a, b) => a + b.votes, 0)) * 100}
                  sx={{ height: 10, my: 1 }}
                />
                <Typography variant="body2">{option.votes} votes</Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Polls;
