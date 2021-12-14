import React, { useEffect, useMemo } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

import { createTheme, ThemeProvider } from "react-neu";
import useLocalStorage from "hooks/useLocalStorage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Start from "views/Start";
import Farm from "views/Farm";
import Dashboard from "views/Dashboard";
import Govern from "views/Govern";
import Swap from "views/Swap";
import TopBar from "components/TopBar";

function App() {
  function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  }

  return (
    <HashRouter>
      <Providers>
        <Web3ReactProvider getLibrary={getLibrary}>
          <TopBar />
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>

          </Switch>
        </Web3ReactProvider>
      </Providers>
    </HashRouter>
  );
}

// themeProvider

const Providers: React.FC = ({ children }) => {
  const [darkModeSetting, setDarkModeSetting] = useLocalStorage("darkMode", true);
  const { dark: darkTheme, light: lightTheme } = useMemo(() => {
    return createTheme({
      baseColor: { h: 272, s: 95, l: 42 },
      baseColorDark: {h: 272, s: 95, l: 42 },
      borderRadius: 28,
    });
  }, [darkModeSetting]);

  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setDarkModeSetting(e.matches ? true : false));

    // Setup dark/light mode for the first time
    setDarkModeSetting(window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false);

    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, []);

  return (
    <ThemeProvider
      darkModeEnabled={darkModeSetting}
      darkTheme={darkTheme}
      lightTheme={lightTheme}
    >
      {children}
    </ThemeProvider>
  );
};

export default App;
