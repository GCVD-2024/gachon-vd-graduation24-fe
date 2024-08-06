import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import GlobalStyle from '../../styles/globalStyles';

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}

export default ThemeProvider;
