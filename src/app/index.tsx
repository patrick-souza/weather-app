import React from "react";
import { Dashboard } from "./modules/dashboard";
import { Provider } from "react-redux";
import configureStore from "./redux-tools";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </Provider>
  );
}
