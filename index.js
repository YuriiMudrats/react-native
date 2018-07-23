import { AppRegistry } from "react-native";
import React from "react";
import { Provider } from "react-redux";

import store from "./src/store";

import App from "./App";

const rootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("todolist", () => rootApp);
