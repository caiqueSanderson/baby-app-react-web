import React from "react";
import { TextField, DateTimePicker } from "..";
import { useTranslation } from "react-i18next";

export default function Sleep({ item, setItem }) {
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

  return (
    <div>
      <DateTimePicker
        name="start_date"
        value={item.data.start_date || null}
        label={t("dateHourStart")}
        fullWidth={true}
        ampm={false}
        format="DD/MM/YYYY HH:mm"
        onChange={(value) => handleInputChange("start_date", value)}
      />

      <DateTimePicker
        name="end_date"
        value={item.data.end_date || null}
        label={t("dateHourEnd")}
        fullWidth={true}
        ampm={false}
        format="DD/MM/YYYY HH:mm"
        onChange={(value) => handleInputChange("end_date", value)}
      />

      <TextField
        label={t("observations")}
        value={item.data.observations || ""}
        onChange={(e) =>
          handleInputChange("observations", e.target.value)
        }
        fullWidth
        multiline
        rows={4}
      />
    </div>
  );
}
