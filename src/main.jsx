import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import { JobProvider } from "./context/JobContext.jsx";
import { SavedJobProvider } from "./context/SavedJobContext.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <JobProvider>
          <SavedJobProvider>
            <FeedbackProvider>
              <App />
            </FeedbackProvider>
          </SavedJobProvider>
        </JobProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
