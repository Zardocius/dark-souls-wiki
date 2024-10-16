import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import "./css/index.scss";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
