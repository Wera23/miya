import { createTheme } from '@mui/material/styles';

const fontTheme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Sacramento',
      fontSize: '55px',
      fontWeight: 200,
    },
    h2: {
      fontFamily: 'Sacramento',
      fontWeight: 300,
      fontSize: '32px',
    },
    button: {
      fontSize: '15px',
      fontFamily: 'Dosis',
    },
    body1: {
      fontFamily: 'Dosis',
      fontSize: '16px',
    },
    body2: {
      fontFamily: 'Dosis',
      fontSize: '16px',
      fontWeight: "bold",
    },
  },
});

export default fontTheme;
