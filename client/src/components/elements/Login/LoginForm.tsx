import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  MailOutline as MailIcon,
  LockOutlined as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
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
import React, { useRef, useState } from 'react';
import { useAuthContext } from '~/providers';
import { useFormik } from 'formik';
import { useSigninMutation } from '~/services';
import { AlertMessage } from '~/components/ui';

export const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { mutate: useSignin, isLoading, isError, isSuccess } = useSigninMutation();

  const togglePasswordVisibility = () => setIsVisible((state) => !state);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      useSignin({ email: values.email, password: values.password });
    },
  });

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
          <Typography variant="body2">We deliver better 🚀</Typography>
        </StyledHeaderSection>
        {isError && <AlertMessage severity="error" />}
        {isSuccess && <AlertMessage severity="success" />}
        <form onSubmit={formik.handleSubmit}>
          <StyledFormSection>
            <TextField
              placeholder="Email"
              variant="outlined"
              type="email"
              size="small"
              name="email"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange}
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
              type={isVisible ? 'text' : 'password'}
              size="small"
              autoComplete="off"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
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
            <Button variant="contained" color="primary" type="submit" fullWidth>
              {isLoading ? 'Loading...' : 'Sign in'}
            </Button>
          </StyledFormSection>
        </form>
      </FormInnerContainer>
    </FormOuterContainer>
  );
};
