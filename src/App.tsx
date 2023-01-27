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

  // Other
  Other,
  BMI,
} from "src/routes/exports";
import Navigator from "src/navigator";

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

          {/* Other */}
          <Route path="/other" element={<Other />} />
          <Route path="/other/bmi" element={<BMI />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {/* <div>Working!</div> */}
    </ThemeProvider>
  );
}

export default App;
