import React from 'react';
import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ptBR, enUS, esES } from '@mui/x-date-pickers/locales';

interface DateTimePickerComponentProps extends DateTimePickerProps<any> {
  locale?: 'ptBR' | 'enUS' | 'esES';
}

const DateTimePickerComponent: React.FC<DateTimePickerComponentProps> = ({
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
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker {...props} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
