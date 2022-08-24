import React, { useState } from 'react'
import HandleRoutes from "./routes/routes";
import GlobalStyle from "./styles/globalStyle";
import DataProvider from "./contexts/contextData";
import { ThemeProvider } from "styled-components";
import light from './styles/themes/light';
import dark from './styles/themes/dark';


function App() {

  const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }

  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <HandleRoutes toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
