import React from "react";
import { DateTimePicker, TextField, Switch, Grid, Typography } from "..";
import { useTranslation } from "react-i18next";

export default function Diaper({ item, setItem }) {
  const { t } = useTranslation();

  const handleSwitchChange = (field, value) => {
    setItem({
      ...item,
      data: { ...item.data, [field]: value },
    });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DateTimePicker
            value={item.data.changeTime || null}
            label={t("dateHourStart")}
            fullWidth
            ampm={false}
            format="DD/MM/YYYY HH:mm"
            onChange={(value) =>
              setItem({
                ...item,
                data: { ...item.data, changeTime: value.toISOString() },
              })
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            {t("exchangeType")}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2" style={{ marginRight: "0.5rem" }}>
              {t("urine")}
            </Typography>
            <Switch
              checked={item.data.urine || false}
              onChange={(e) => handleSwitchChange("urine", e.target.checked)}
            />
            <Typography variant="body2" style={{ margin: "0 1rem" }}>
              {t("feces")}
            </Typography>
            <Switch
              checked={item.data.feces || false}
              onChange={(e) => handleSwitchChange("feces", e.target.checked)}
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label={t("observations")}
            value={item.data.observations || ""}
            onChange={(e) =>
              setItem({
                ...item,
                data: { ...item.data, observations: e.target.value },
              })
            }
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
    </div>
  );
}
