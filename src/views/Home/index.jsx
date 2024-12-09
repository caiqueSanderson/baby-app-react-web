import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Avatar,
  CustomList,
} from "../../components";
import { Settings, BarChart, AddCircle, WidthFull } from "@mui/icons-material";

import { getStoredDataLocalStorage } from "../../services/dataLocalStorage";
import "../styles/homeScreen.scss";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  function navigateSpecificForm(itemType) {
    navigate(`/form/${itemType}`);
  }

  useEffect(() => {
    setItems(getStoredDataLocalStorage());
  }, []);

  return (
    <Box className="home-container">
      <Container className="home-header">
        <Avatar
          src="/baby.svg"
          alt="Bebê"
          className="baby-image"
          sx={{
            "& .MuiAvatar-img": {
              filter: "brightness(0) saturate(100%) invert(100%)",
            },
          }}
        />

        <Box className="header-info right">
          <IconButton onClick={() => navigate("/settings")}>
            <Settings />
          </IconButton>
          <Typography variant="body2">{t("weight")}: 3,5 kg</Typography>
        </Box>

        <Box className="header-info left">
          <IconButton>
            <BarChart />
          </IconButton>
          <Typography variant="body2">{t("height")}: 50 cm</Typography>
        </Box>
      </Container>

      <Container className="home-cards">
        <Typography variant="h5" className="cards-title">
          {t("title")}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box className="card" onClick={() => navigateSpecificForm("sleep")}>
              <AddCircle className="card-icon" />
              <Typography variant="body1">{t("sleep")}</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box className="card" onClick={() => navigateSpecificForm("eat")}>
              <AddCircle className="card-icon" />
              <Typography variant="body1">{t("eat")}</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box
              className="card"
              onClick={() => navigateSpecificForm("diaper")}
            >
              <AddCircle className="card-icon" />
              <Typography variant="body1">{t("diaper")}</Typography>
            </Box>
          </Grid>

          <Grid
            container={true}
            sx={{
              marginTop: "1em",
            }}
          >
            <Grid
              container
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "1em",
              }}
            >
              {items ? (
                <CustomList
                  sx={{
                    overflow: "auto",
                    maxHeight: "56.5vh",
                  }}
                  items={items}
                />
              ) : (
                <Typography>{t("noItems")}</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
