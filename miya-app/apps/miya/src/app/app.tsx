import { AllRetrievers, Header } from './components';
import { ModalProvider } from 'react-modal-hook';

import WebFont from 'webfontloader';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans', 'Dosis', 'Sacramento'],
      },
    });
  }, []);

  return (
    <ModalProvider>
      <div>
        <Header />
        <AllRetrievers />
      </div>
    </ModalProvider>
  );
}

export default App;
