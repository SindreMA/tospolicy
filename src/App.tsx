import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './router';
import Layout from './components/layout';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material';
import q from 'qjuul';

function App() {

  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode : 'dark',
        },
      }),
    [mode],
  );

  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <q.div className="App" f1 w100 h100 frtl >
          <Layout>
            <AppRouter />
          </Layout>
        </q.div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
