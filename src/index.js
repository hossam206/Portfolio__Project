import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import { Store } from "./rtk/Store/Store";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={Store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
