import { Header, MapWithAllRetrievers } from './components';
import { ModalProvider } from 'react-modal-hook';

import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import fontTheme from '../assets/fonts/appFonts';
import '../assets/fontello/css/fontello.css';

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
        <Header />
        <MapWithAllRetrievers />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
