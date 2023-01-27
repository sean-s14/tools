import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { SwapHoriz } from "@mui/icons-material";
import RouteContainer from "src/routeContainer";

export default function TemperatureConverter() {
  const [fahrenheit, setFahrenheit] = useState(0);
  const [celsius, setCelsius] = useState(0);

  function handleFahrenheit(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (e.target.value === "") {
      setFahrenheit(0);
    } else {
      try {
        setFahrenheit(parseInt(e.target.value));
      } catch (e) {
        console.log(e);
      }
    }
  }

  function handleCelsius(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (e.target.value === "") {
      setCelsius(0);
    } else {
      try {
        setCelsius(parseInt(e.target.value));
      } catch (e) {
        console.log(e);
      }
    }
  }

  function farenheitToCelsius() {
    let newCelsius = (5 / 9) * (fahrenheit - 32);
    newCelsius = parseFloat(newCelsius.toFixed(2));
    setCelsius(newCelsius);
  }

  function celsiusToFahrenheit() {
    let newCelsius = (celsius * 9) / 5 + 32;
    newCelsius = parseFloat(newCelsius.toFixed(2));
    setFahrenheit(newCelsius);
  }

  return (
    <RouteContainer sx={{ alignItems: "start" }}>
      <Stack direction={["column", "row"]} sx={{ alignItems: "center" }}>
        <TextField
          onKeyUp={farenheitToCelsius}
          onChange={handleFahrenheit}
          value={fahrenheit}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">°F</InputAdornment>
            ),
          }}
          sx={{ maxWidth: 150 }}
        />

        <SwapHoriz sx={{ fontSize: "44px", mx: 2 }} />

        <TextField
          onKeyUp={celsiusToFahrenheit}
          onChange={handleCelsius}
          value={celsius}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">°C</InputAdornment>
            ),
          }}
          sx={{ maxWidth: 150 }}
        />
      </Stack>
    </RouteContainer>
  );
}
