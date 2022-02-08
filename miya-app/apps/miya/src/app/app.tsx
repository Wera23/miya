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
import { UserContextProvider } from './context/UserContext';
import RetrieversGallery from './components/Retrievers/RetrieversGallery/RetrieversGallery';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { RetrieversContextProvider } from './context/RetrieversContext';

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
      <UserContextProvider>
        <LocalizationProvider dateAdapter={DateAdapter as any}>
          <RetrieversContextProvider>
          <RetrieverContextProvider>
            <DeleteRetrieverContextProvider>
              <TransparentContextProvider>
                <ThemeProvider theme={appTheme}>
                  <ModalProvider>
                    <ToastContainer />
                    <BrowserRouter>
                      <Routes>
                        <Route
                          path="/home"
                          element={<PrivateRoute component={Homepage} />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/gallery" element={<RetrieversGallery />} />
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
          </RetrieversContextProvider>
        </LocalizationProvider>
      </UserContextProvider>
    </LoggedContextProvider>
  );
}

export default App;
