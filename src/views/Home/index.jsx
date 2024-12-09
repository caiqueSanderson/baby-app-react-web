import React, { useState } from "react";
import { Box, Container, Typography, Grid, TextField, Button, IconButton, Avatar } from "../../components";
import { Settings, BarChart, AddCircle } from "@mui/icons-material";
import "../styles/homeScreen.scss";

export default function Home() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleAddItem() {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  }

  return (
    <Box className="home-container">
      <Container className="home-header">

        <Avatar
          src="/baby.svg"
          alt="Bebê"
          className="baby-image"
          sx={{
            "& .MuiAvatar-img": {
              filter: "brightness(0) saturate(100%) invert(50%) sepia(90%) saturate(400%) hue-rotate(290deg)",
            },
          }}
        />

        <Box className="header-info right">
          <IconButton>
            <Settings />
          </IconButton>
          <Typography variant="body2">Peso: 3,5 kg</Typography>
        </Box>

        <Box className="header-info left">
          <IconButton>
            <BarChart />
          </IconButton>
          <Typography variant="body2">Altura: 50 cm</Typography>
        </Box>
      </Container>

      <Container className="home-cards">
        <Typography variant="h5" className="cards-title">
          Adicione informações
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box className="card">
              <AddCircle className="card-icon" />
              <Typography variant="body1">Sono</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="card">
              <AddCircle className="card-icon" />
              <Typography variant="body1">Amamentação</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="card">
              <AddCircle className="card-icon" />
              <Typography variant="body1">Fralda</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container className="home-todo">
        <Box className="todo-form">
          <TextField
            fullWidth
            label="Adicionar item"
            variant="outlined"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <Button
            variant="contained"
            className="todo-button"
            onClick={handleAddItem}
          >
            Adicionar
          </Button>
        </Box>

        <Box className="todo-list">
          {items.map((item, index) => (
            <Typography key={index} className="todo-item">
              {item}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
