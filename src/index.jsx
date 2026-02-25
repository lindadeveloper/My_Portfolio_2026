import { StrictMode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <SpeedInsights />
    <App />
  </StrictMode>,
);
