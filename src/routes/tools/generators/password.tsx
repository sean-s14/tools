import { useState } from "react";
import {
  Stack,
  TextField,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

import RouteContainer from "src/routeContainer";
import { passwordGenerator } from "src/utils/exports";
import { IOSSwitch } from "src/components/exports";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [upperCase, setUpperCase] = useState(true);
  const [specialChars, setSpecialChars] = useState(true);
  const [numbers, setNumbers] = useState(true);

  type OnChange = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

  function handleLength(e: OnChange) {
    let val = e.target.value;

    if (val !== "") {
      try {
        setLength(parseInt(val));
      } catch (e: any) {
        console.log(e);
      }
    }
  }

  function handleUpperCase() {
    setUpperCase((prev) => !prev);
  }

  function handleSpecialChars() {
    setSpecialChars((prev) => !prev);
  }

  function handleNumbers() {
    setNumbers((prev) => !prev);
  }

  function handleGeneratePassword() {
    setPassword(passwordGenerator(length, upperCase, specialChars, numbers));
  }

  return (
    <RouteContainer sx={{ alignItems: "start" }}>
      <Stack spacing={2} sx={{ maxWidth: 300 }}>
        <FormGroup>
          {/* Length */}
          <FormControlLabel
            control={
              <TextField
                size="small"
                value={length}
                onChange={handleLength}
                sx={{ maxWidth: 60, ml: 1 }}
              />
            }
            label="Length"
            labelPlacement="start"
            sx={{ my: 2, mx: 0 }}
          />

          {/* Upper Case Characters */}
          <FormControlLabel
            control={
              <IOSSwitch
                checked={upperCase}
                sx={{ ml: 1 }}
                onClick={handleUpperCase}
              />
            }
            label="Upper Case Letters"
            labelPlacement="start"
            sx={{ my: 2, mx: 0 }}
          />

          {/* Special Characters */}
          <FormControlLabel
            control={
              <IOSSwitch
                checked={specialChars}
                sx={{ ml: 1 }}
                onClick={handleSpecialChars}
              />
            }
            label="Special Characters"
            labelPlacement="start"
            sx={{ my: 2, mx: 0 }}
          />

          {/* Numbers */}
          <FormControlLabel
            control={
              <IOSSwitch
                checked={numbers}
                sx={{ ml: 1 }}
                onClick={handleNumbers}
              />
            }
            label="Numbers"
            labelPlacement="start"
            sx={{ my: 2, mx: 0 }}
          />
        </FormGroup>

        <Button variant="contained" onClick={handleGeneratePassword}>
          Generate
        </Button>

        <TextField
          disabled
          value={password}
          sx={{
            "& .MuiInputBase-input": {
              textAlign: "center",
              letterSpacing: 1,
            },
          }}
        />
      </Stack>
    </RouteContainer>
  );
}
