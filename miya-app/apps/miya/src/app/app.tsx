import { useEffect } from 'react';

import { ModalProvider } from 'react-modal-hook';
import { ThemeProvider } from '@emotion/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

import { Homepage, Register } from './page';

import fontTheme from '../assets/fonts/appFonts';
import '../assets/fontello/css/fontello.css';
import './app.module.scss';

export function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans', 'Dosis', 'Sacramento'],
      },
    });
  }, []);

  return (
    <ThemeProvider theme={fontTheme}>
      <ModalProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="register" element={<Register />} />
        </Routes></BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
