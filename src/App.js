import React from 'react';
import {theme} from "./theme";
import {ThemeProvider} from "styled-components";
import Layout from "./components/Layout";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import {defaultReducer} from "./store/reducers";
import thunk from 'redux-thunk';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const store = createStore(defaultReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  </Provider>

);

export default App;
