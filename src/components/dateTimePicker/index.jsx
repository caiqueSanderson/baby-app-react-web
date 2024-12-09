import React from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ptBR, enUS, esES } from "@mui/x-date-pickers/locales";

const DateTimePickerComponent = ({ locale = "ptBR", ...props }) => {
  const selectedLocale =
    locale === "ptBR" ? ptBR : locale === "enUS" ? enUS : esES;

  return (
    <LocalizationProvider
      localeText={selectedLocale.components.MuiLocalizationProvider.defaultProps.localeText}
      dateAdapter={AdapterDayjs}
    >
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker {...props} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
