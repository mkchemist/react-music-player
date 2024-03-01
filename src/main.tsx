import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import { Provider } from "react-redux";
import { store } from "./store.tsx";
import "./app.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
