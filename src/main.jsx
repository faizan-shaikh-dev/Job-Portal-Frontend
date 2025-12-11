import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import { JobProvider } from "./context/jobContext.jsx";
import { SavedJobProvider } from "./context/SavedJobContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <JobProvider>
          <SavedJobProvider>
            <App />
          </SavedJobProvider>
        </JobProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
