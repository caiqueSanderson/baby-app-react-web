import React, { useEffect } from "react";
import { TextField, DateTimePicker, Switch } from "..";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs"; 

export default function Eat({ item, setItem }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!item.data.feedType) {
      setItem((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          feedType: "breast", 
        },
      }));
    }
  }, [item, setItem]);

  const handleSwitchChange = (isBottle) => {
    setItem({
      ...item,
      data: {
        ...item.data,
        feedType: isBottle ? "bottle" : "breast",
        start_date: null,
        end_date: null,
        ml: "",
        observations: item.data.observations || "",
      },
    });
  };

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
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <span style={{ marginRight: "1rem" }}>{t("breast")}</span>
        <Switch
          checked={item.data.feedType === "bottle"}
          onChange={(e) => handleSwitchChange(e.target.checked)}
        />
        <span style={{ marginLeft: "1rem" }}>{t("bottle")}</span>
      </div>

      {item.data.feedType === "bottle" && (
        <TextField
          label={t("amountMl")}
          value={item.data.ml || ""}
          onChange={(e) =>
            setItem({
              ...item,
              data: { ...item.data, ml: e.target.value },
            })
          }
          fullWidth
          type="number"
        />
      )}

      {item.data.feedType === "breast" && (
        <>
          <DateTimePicker
            value={item.data.start_date ? dayjs(item.data.start_date) : null}
            label={t("dateHourStart")}
            name="start_date"
            fullWidth={true}
            ampm={false}
            format="DD/MM/YYYY HH:mm"
            onChange={(value) => handleInputChange("start_date", value)}
          />

          <DateTimePicker
            value={item.data.end_date ? dayjs(item.data.end_date) : null}
            label={t("dateHourEnd")}
            name="end_date"
            fullWidth={true}
            ampm={false}
            format="DD/MM/YYYY HH:mm"
            onChange={(value) => handleInputChange("end_date", value)}
          />
        </>
      )}

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
