import React from 'react';
import {theme} from "./theme";
import {ThemeProvider} from "styled-components";
import Layout from "./components/Layout";

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout />
  </ThemeProvider>
);

export default App;
