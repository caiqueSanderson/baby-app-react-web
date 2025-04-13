import React from "react";
import { useTranslation } from "react-i18next";
import { AppBar, Box, Card, Grid, Typography } from "../../components";
import "../styles/dashboardScreen.scss";

export default function Dashboard() {
  const { t } = useTranslation();

  let sleepData = 0;
  let eatData = 0;
  let diaperData = 0;

  return (
    <Box className="dashboard-container">
      
      <AppBar title={t("dashboard")} />

      <Grid container spacing={3} className="dashboard-grid">
        <Grid item xs={12} sm={4}>
          <Card className="dashboard-card">
            <Typography variant="h5" className="card-title">
              {t("sleep")}
            </Typography>
            <Typography variant="h6">{`${sleepData} horas`}</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card className="dashboard-card">
            <Typography variant="h5" className="card-title">
              {t("eat")}
            </Typography>
            <Typography variant="h6">{`${eatData} refeições`}</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card className="dashboard-card">
            <Typography variant="h5" className="card-title">
              {t("diaper")}
            </Typography>
            <Typography variant="h6">{`${diaperData} trocas`}</Typography>
          </Card>
        </Grid>
      </Grid>

    </Box>
  );
}
