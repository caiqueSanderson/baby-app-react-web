import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography, IconButton, Box } from "../../";
import { ArrowBack, Delete } from "@mui/icons-material";
import "./styles.scss"

export default function AppBar({ isEditMode, title, onDelete }) {
  const navigate = useNavigate();

  return (
    <Box className="app-bar">
      <IconButton className="back-button" onClick={() => navigate("/")}>
        <ArrowBack />
      </IconButton>
      <Typography variant="h6" className="title">
        {title}
      </Typography>
      {isEditMode && (
        <IconButton className="delete-button" onClick={onDelete}>
          <Delete />
        </IconButton> 
      )}
    </Box>
  );
}
