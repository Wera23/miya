import { useEffect } from 'react';

import { ModalProvider } from 'react-modal-hook';
import { ThemeProvider } from '@emotion/react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import WebFont from 'webfontloader';

import { Homepage, Login, PrivateRoute, Register } from './page';

import '../assets/fontello/css/fontello.css';
import './app.module.scss';
import { appTheme } from '../assets/theme';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
  DeleteRetrieverContextProvider,
  LoggedContextProvider,
  RetrieverContextProvider,
  TransparentContextProvider,
} from './context';

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
      <LocalizationProvider dateAdapter={DateAdapter as any}>
        <RetrieverContextProvider>
          <DeleteRetrieverContextProvider>
            <TransparentContextProvider>
              <ThemeProvider theme={appTheme}>
                <ModalProvider>
                  <BrowserRouter>
                    <Routes>
                      <Route
                        path="/home"
                        element={<PrivateRoute component={Homepage} />}
                      />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route
                        path="*"
                        element={<Navigate to="/home" replace />}
                      />
                    </Routes>
                  </BrowserRouter>
                </ModalProvider>
              </ThemeProvider>
            </TransparentContextProvider>
          </DeleteRetrieverContextProvider>
        </RetrieverContextProvider>
      </LocalizationProvider>
    </LoggedContextProvider>
  );
}

export default App;
