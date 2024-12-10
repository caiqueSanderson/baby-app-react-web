import React from "react";
import { DateTimePicker, TextField, Grid, Typography, Select } from "..";
import { useTranslation } from "react-i18next";

export default function Diaper({ item, setItem }) {
  const { t } = useTranslation();

  const handleInputChange = (field, value) => {
    setItem((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [field]: value,
      },
    }));
  };

  const diaperOptions = [
    { value: "urine", label: t("urine") },
    { value: "feces", label: t("feces") },
    { value: "both", label: t("both") },
    { value: "clean", label: t("clean") },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DateTimePicker
            value={item.data.changeTime || null}
            label={t("changeTime")}
            fullWidth
            ampm={false}
            format="DD/MM/YYYY HH:mm"
            onChange={(value) => handleInputChange("changeTime", value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            {t("diaperCondition")}
          </Typography>
          <Select
            label={t("diaperCondition")}
            value={item.data.condition || ""}
            onChange={(e) => handleInputChange("condition", e.target.value)}
            options={diaperOptions}
            helperText={t("selectCondition")}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label={t("observations")}
            value={item.data.observations || ""}
            onChange={(e) => handleInputChange("observations", e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
    </div>
  );
}
