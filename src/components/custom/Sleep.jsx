import React from "react";
import { TextField, DateTimePicker } from "..";
import { useTranslation } from "react-i18next";

export default function Sleep({ item, setItem }) {
  const { t } = useTranslation();

  return (
    <div>
      <DateTimePicker
        value={item.data.start_date || null}
        label={t("dateHourStart")}
        name="start_date"
        fullWidth={true}
        ampm={false}
        format="DD/MM/YYYY HH:mm"
        onChange={(value) =>
          setItem({
            ...item,
            data: { ...item.data, start_date: value.toISOString() },
          })
        }
      />

      <DateTimePicker
        value={item.data.end_date || null}
        label={t("dateHourEnd")}
        name="end_date"
        fullWidth={true}
        ampm={false}
        format="DD/MM/YYYY HH:mm"
        onChange={(value) =>
          setItem({
            ...item,
            data: { ...item.data, end_date: value.toISOString() },
          })
        }
      />

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
    </div>
  );
}
