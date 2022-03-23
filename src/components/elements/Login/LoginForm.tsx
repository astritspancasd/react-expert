import { Button, TextField, Typography, InputAdornment } from '@mui/material';
import {
  MailOutline as MailIcon,
  LockOutlined as LockIcon,
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
} from './Login.styles';

export const LoginForm = () => {
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
          <Typography variant="h6">Sign in</Typography>
          <Typography variant="body2">We deliver better</Typography>
        </StyledHeaderSection>
        <form>
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
            <StyledLink to="/forgot-password">Forgot Password</StyledLink>
            <StyledLink to="/sign-up">Sign Up</StyledLink>
          </StyledLinkSection>
          <StyledFormSection>
            <Button variant="contained" color="primary" fullWidth>
              Sign in
            </Button>
          </StyledFormSection>
        </form>
      </FormInnerContainer>
    </FormOuterContainer>
  );
};
