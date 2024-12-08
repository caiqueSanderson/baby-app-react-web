import React from 'react';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ptBR, enUS, esES } from '@mui/x-date-pickers/locales';

interface DatePickerComponentProps extends DatePickerProps<any> {
  locale?: 'ptBR' | 'enUS' | 'esES';
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  locale = 'ptBR',
  ...props
}) => {
  const selectedLocale =
    locale === 'ptBR' ? ptBR : locale === 'enUS' ? enUS : esES;

  return (
    <LocalizationProvider
      localeText={selectedLocale.components.MuiLocalizationProvider.defaultProps.localeText}
      dateAdapter={AdapterDayjs}
    >
      <DemoContainer components={['DatePicker']}>
        <DatePicker {...props} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
