import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppBar, Box, Card, Grid, Typography } from "../../components";
import "../styles/dashboardScreen.scss";

export default function Dashboard() {
  const { t } = useTranslation();

  const [sleepData, setSleepData] = useState(0);
  const [eatData, setEatData] = useState(0);
  const [diaperData, setDiaperData] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("@items")) || [];
    // Data no @items esta em string
  
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0]; // 'YYYY-MM-DD'

    const todayItems = storedItems.filter((item) => {
      const itemDate = item.data?.end_date || item.data?.changeTime;
      if (!itemDate) return false;
      
      const itemDateStr = new Date(itemDate).toISOString().split("T")[0]; // 'YYYY-MM-DD'
      return itemDateStr === todayStr;
    });

    let totalSleep = 0;
    let totalEat = 0;
    let totalDiaper = 0;

    todayItems.forEach((item) => {
      switch (item.type) {
        case "sleep":
          const start_date = new Date(item.data?.start_date);
          const end_date = new Date(item.data?.end_date);
          const differenceHoursMiliseconds = end_date - start_date;
          const differenceInHours = differenceHoursMiliseconds / (1000 * 60 * 60);

          totalSleep += Number(differenceInHours.toFixed(2) || 0);
          break;
        case "eat":
          totalEat += 1;
          break;
        case "diaper":
          totalDiaper += 1;
          break;
        default:
          break;
      }
    });

    setSleepData(totalSleep);
    setEatData(totalEat);
    setDiaperData(totalDiaper);
  }, []);


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
