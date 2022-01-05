import { useEffect } from 'react';

import { ModalProvider } from 'react-modal-hook';
import { ThemeProvider } from '@emotion/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

import { Homepage, Login, Register } from './page';

import '../assets/fontello/css/fontello.css';
import './app.module.scss';
import { appTheme } from '../assets/theme';
import { LoggedContextProvider } from './context/IsLoggedIn';

export function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans', 'Dosis', 'Sacramento'],
      },
    });
  }, []);

  return (
    <LoggedContextProvider>
      <ThemeProvider theme={appTheme}>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </ThemeProvider>
    </LoggedContextProvider>
  );
}

export default App;
