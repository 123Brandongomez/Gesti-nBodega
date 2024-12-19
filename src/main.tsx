import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import "../public/js/tailwind.js";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
