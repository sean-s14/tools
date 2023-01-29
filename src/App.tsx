import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Error,

  // Conversion
  Conversion,
  TemperatureConverter,

  // Generators
  Generators,
  PasswordGenerator,

  // Other
  Other,
  BMI,
} from "src/routes/exports";
import Navigator from "src/navigator";

const env = import.meta.env;
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Conversion */}
          <Route path="/conversion" element={<Conversion />} />
          <Route
            path="/conversion/temperature"
            element={<TemperatureConverter />}
          />

          {/* Generators */}
          <Route path="/generators" element={<Generators />} />
          <Route path="/generators/password" element={<PasswordGenerator />} />

          {/* Other */}
          <Route path="/other" element={<Other />} />
          <Route path="/other/bmi" element={<BMI />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
