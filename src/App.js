import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import Router from "./Router";

import { GlobalStyle } from "./styles/globalStyle";
import { darkTheme, lightTheme } from "./styles/theme";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <>
          <Layout>
            <Router />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
