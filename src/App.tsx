import React, { useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from './styles/global';
import light from '../src/styles/themes/light';
import dark from '../src/styles/themes/dark';

import Routes from './routes';

import usePersistedState from './utils/usePersistedState';
import HeaderContent  from './components/header';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  
  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  console.log(toggleTheme);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <HeaderContent themeSeted={toggleTheme}/>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;
