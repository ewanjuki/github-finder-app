import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AlertProvider } from "./store/alert/alert-context";
import { GithubProvider } from "./store/github/github-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </GithubProvider>
  </React.StrictMode>
);
