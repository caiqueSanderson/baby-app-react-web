import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../Context";

import {
  Box,
  Container,
  Button,
  Typography,
  TextField,
  AppBar,
} from "../../components";
import { Save, Logout } from "@mui/icons-material";

import "../styles/settings.scss";

export default function Settings() {
  const { changeLanguage, logout, babyInfo, setBabyInfo } = useAppContext();
  const { t } = useTranslation();

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

  const handleBabyInfoChange = (field, value) => {
    setBabyInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box>
      <AppBar title={t("settings")} />
      <Box className="settings-container">
        <Container className="settings-content">
          <Typography variant="h2" className="settings-text-h2">
            {t("changeLanguage")}
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

          <Typography variant="body2" className="settings-text">
            {t("selectedLanguage")}:{" "}
            {selectedLanguage === "pt"
              ? "Português"
              : selectedLanguage === "en"
              ? "English"
              : "Español"}
          </Typography>
          <Button
            onClick={handleSaveLanguage}
            variant="contained"
            className="saveButton"
            startIcon={<Save />}
          >
            {t("save")}
          </Button>
        </Container>

        <Container className="settings-content">
          <Typography variant="h2" className="settings-text-h2">
            {t("babyInfo")}
          </Typography>
          <TextField
            label={t("babyName")}
            value={babyInfo.name || ""}
            onChange={(e) => handleBabyInfoChange("name", e.target.value)}
            fullWidth
          />
          <TextField
            label={t("babyWeight")}
            value={babyInfo.weight || ""}
            onChange={(e) => handleBabyInfoChange("weight", e.target.value)}
            fullWidth
            type="number"
          />
          <TextField
            label={t("babyLength")}
            value={babyInfo.height || ""}
            onChange={(e) => handleBabyInfoChange("height", e.target.value)}
            fullWidth
            type="number"
          />
          <Button
            onClick={() => localStorage.setItem("@dataBaby", babyInfo)}
            variant="contained"
            className="save-button"
            startIcon={<Save />}
          >
            {t("saveBabyInfo")}
          </Button>
        </Container>

        <Container className="settings-content">
          <Button
            onClick={logout}
            variant="contained"
            color="secondary"
            startIcon={<Logout />}
          >
            {t("logout")}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
