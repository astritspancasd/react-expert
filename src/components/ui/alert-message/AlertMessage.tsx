import { Alert, AlertTitle } from '@mui/material';
import { FC } from 'react';
import { AlertMessageContainer } from './AlertMessage.styles';

type AlertMessageProps = {
  severity: 'error' | 'success' | 'info' | 'warning';
  message?: string;
};

const AlertTitleOptions = {
  error: 'Error',
  warning: 'Warning',
  success: 'Success',
  info: 'Info',
};

const AlertMessageOptions = {
  error: 'Opps...',
  warning: 'Careful...',
  success: 'Woah...',
  info: 'Hey...',
};

export const AlertMessage: FC<AlertMessageProps> = (props) => {
  const { severity, message } = props;

  return (
    <AlertMessageContainer>
      <Alert severity={severity}>
        <AlertTitle>{AlertTitleOptions[severity]}</AlertTitle>
        {message ? message : AlertMessageOptions[severity]}
      </Alert>
    </AlertMessageContainer>
  );
};
