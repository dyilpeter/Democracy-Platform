import React, { useState } from "react";
import { Container, Typography, Card, CardContent, Button, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { Link } from "react-router-dom";

const forumsData = [
  { id: 1, title: "Election Security", description: "Discuss ways to secure our voting process.", category: "Elections" },
  { id: 2, title: "Voter Registration", description: "Ideas to improve voter turnout.", category: "Voter Rights" },
  { id: 3, title: "Campaign Transparency", description: "Ensuring leaders remain accountable.", category: "Transparency" },
  { id: 4, title: "Gerrymandering Issues", description: "Redistricting and fair elections.", category: "Elections" },
];

const Forums = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredForums = forumsData.filter(
    (forum) =>
      forum.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || forum.category === category)
  );

  return (
    <Container maxWidth="md" style={{ padding: "20px" }}>
      <Typography variant="h3" gutterBottom align="center">
        🗣️ Forums
      </Typography>

      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary" style={{ marginBottom: "20px" }}>
          🏠 Home
        </Button>
      </Link>

      {/* Search Bar */}
      <TextField
        label="Search Discussions"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px" }}
      />

      {/* Category Filter */}
      <FormControl fullWidth style={{ marginBottom: "20px" }}>
        <InputLabel>Filter by Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Elections">Elections</MenuItem>
          <MenuItem value="Voter Rights">Voter Rights</MenuItem>
          <MenuItem value="Transparency">Transparency</MenuItem>
        </Select>
      </FormControl>

      {/* Forums List */}
      {filteredForums.map((forum) => (
        <Card key={forum.id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5">{forum.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {forum.description}
            </Typography>
            <Button variant="outlined" color="primary" style={{ marginTop: "10px" }}>
              Join Discussion
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Forums;
