import { Button, TextField, Typography, InputAdornment } from '@mui/material';
import {
  MailOutline as MailIcon,
  LockOutlined as LockIcon,
  AccountCircleOutlined as AccountIcon
} from '@mui/icons-material';
import {
  FormInnerContainer,
  FormOuterContainer,
  StyledFormSection,
  StyledHeaderSection,
  StyledLink,
  StyledLinkSection,
  StyledLogo,
  StyledLogoSection,
} from './Register.styles';

export const RegisterForm = () => {
  return (
    <FormOuterContainer>
      <FormInnerContainer>
        <StyledLogoSection>
          <StyledLogo
            src="https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg"
            alt="Logo Apollo Client"
          />
        </StyledLogoSection>
        <StyledHeaderSection>
          <Typography variant="h6">Sign up</Typography>
          <Typography variant="body2">We deliver better 🚀</Typography>
        </StyledHeaderSection>
        <form>
          <StyledFormSection>
            <TextField
              placeholder="Name"
              variant="outlined"
              type="email"
              size="small"
              autoComplete="off"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountIcon />
                  </InputAdornment>
                ),
              }}
            />
          </StyledFormSection>
          <StyledFormSection>
            <TextField
              placeholder="Lastname"
              variant="outlined"
              type="email"
              size="small"
              autoComplete="off"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountIcon />
                  </InputAdornment>
                ),
              }}
            />
          </StyledFormSection>
          <StyledFormSection>
            <TextField
              placeholder="Email"
              variant="outlined"
              type="email"
              size="small"
              autoComplete="off"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </StyledFormSection>
          <StyledFormSection>
            <TextField
              placeholder="Password"
              variant="outlined"
              type="password"
              size="small"
              autoComplete="off"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
          </StyledFormSection>
          <StyledLinkSection>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/about-us">About us</StyledLink>
          </StyledLinkSection>
          <StyledFormSection>
            <Button variant="contained" color="primary" fullWidth>
              Sign up
            </Button>
          </StyledFormSection>
        </form>
      </FormInnerContainer>
    </FormOuterContainer>
  );
};
