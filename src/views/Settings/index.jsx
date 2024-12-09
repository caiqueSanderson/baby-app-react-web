import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../Context";

import {
  Box,
  Container,
  Button,
  Typography,
  IconButton,
} from "../../components";

import { ArrowBack, Save } from "@mui/icons-material";
import "../styles/settings.scss";

export default function Settings() {
  const { changeLanguage } = useAppContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("@language");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      changeLanguage(savedLanguage); 
    }
  }, [changeLanguage]);

  const handleSaveLanguage = () => {
    localStorage.setItem("@language", selectedLanguage);
    changeLanguage(selectedLanguage); 
  };

  return (
    <Box className="settings-container">
      <Container className="settings-header">
        <IconButton className="back-button" onClick={() => navigate("/")}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" className="settings-title">
          {t("settings")}
        </Typography>
      </Container>

      <Container className="settings-content">
        <Typography variant="h2" className="settings-text-h2">
          {t("change_language")}
        </Typography>
        <Button
          onClick={() => setSelectedLanguage("pt")}
          variant={selectedLanguage === "pt" ? "contained" : "outlined"}
        >
          Português
        </Button>
        <Button
          onClick={() => setSelectedLanguage("en")}
          variant={selectedLanguage === "en" ? "contained" : "outlined"}
        >
          English
        </Button>
        <Button
          onClick={() => setSelectedLanguage("es")}
          variant={selectedLanguage === "es" ? "contained" : "outlined"}
        >
          Español
        </Button>
      </Container>

      <Container className="settings-content">
        <Typography variant="h2" className="settings-text-h2">
          {t("save_language")}
        </Typography>
        <Typography variant="body2" className="settings-text">
          {t("selected_language")}: {selectedLanguage === "pt" ? "Português" : selectedLanguage === "en" ? "English" : "Español"}
        </Typography>
        <Button
          onClick={handleSaveLanguage}
          variant="contained"
          className="save-button"
          startIcon={<Save />}
        >
          {t("save")}
        </Button>
      </Container>
    </Box>
  );
}
