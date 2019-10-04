import React from "react";
import { Dashboard } from "./modules/dashboard";
import { Provider } from "react-redux";
import configureStore from "./redux-tools";
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
