import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
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
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: {
      //dark green
      main: '#005740',
    },
    //light green
    secondary: {
      main: '#349041',
    },
    warning: {
      //yellow
      main: '#ffc000',
    },
    error: {
      //red
      main: '#ee0027',
    },
    success: {
      //light green
      main: '#349041',
    },
  },
});

export default appTheme;
