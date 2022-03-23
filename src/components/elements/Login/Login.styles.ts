import { Box } from '@mui/material';
import { theme } from '~/components/ui';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledFormSection = styled(Box)({
  padding: theme.spacing(1),
});

export const StyledHeaderSection = styled(Box)({
  padding: theme.spacing(1, 1, 3, 1),
});

export const StyledLinkSection = styled(Box)({
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 500px)': {
    flexDirection: 'column',
  },
});

export const FormOuterContainer = styled(Box)({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
});

export const FormInnerContainer = styled(Box)({
  width: '500px',
  maxWidth: '100%',
  padding: theme.spacing(3, 1),
});

export const StyledLink = styled(NavLink)({
  textDecoration: 'none',
  fontSize: 14,
  '@media (max-width: 500px)': {
    display: 'block',
    margin: theme.spacing(0.5, 0),
  },
});

export const StyledLogoSection = styled(Box)({
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'center',
});

export const StyledLogo = styled('img')({
  maxWidth: '100%',
  maxHeight: '60px',
});
