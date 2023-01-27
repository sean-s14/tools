import { useState, useEffect } from "react";
import { Stack, TextField, InputAdornment, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import RouteContainer from "src/routeContainer";

export default function BMI() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [BMI, setBMI] = useState(0);

  useEffect(() => {
    if (weight > 0 && height > 0) {
      handleBMI();
    } else {
      setBMI(0);
    }
  }, [weight, height]);

  type OnChange = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

  function handleWeight(e: OnChange) {
    let val = e.target.value;
    if (val === "") {
      setWeight(0);
    } else {
      try {
        setWeight(parseInt(val));
      } catch (e: any) {
        console.log(e);
      }
    }
  }
  function handleHeight(e: OnChange) {
    let val = e.target.value;
    if (val === "") {
      setHeight(0);
    } else {
      try {
        setHeight(parseInt(val));
      } catch (e: any) {
        console.log(e);
      }
    }
  }

  function handleBMI() {
    const heightInMetres = height / 100;
    const newBMI = weight / (heightInMetres * heightInMetres);
    setBMI(parseFloat(newBMI.toFixed(1)));
  }

  return (
    <RouteContainer sx={{ alignItems: "start" }}>
      <Stack direction={["column", "row"]} sx={{ alignItems: "center" }}>
        <TextField
          value={weight}
          onChange={handleWeight}
          helperText="weight"
          sx={{ maxWidth: 150 }}
          InputProps={{
            endAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />

        <Add sx={{ mx: 1, mb: { sm: 2 } }} />

        <TextField
          value={height}
          onChange={handleHeight}
          helperText="height"
          sx={{ maxWidth: 150 }}
          InputProps={{
            endAdornment: <InputAdornment position="start">cm</InputAdornment>,
          }}
        />
        <Typography sx={{ fontSize: 28, mx: 1, mb: { sm: 2 } }}>=</Typography>
        <TextField
          value={BMI || "???"}
          onChange={handleBMI}
          disabled
          helperText="result"
          sx={{ maxWidth: 150 }}
          InputProps={{
            endAdornment: <InputAdornment position="start">BMI</InputAdornment>,
          }}
        />
      </Stack>
    </RouteContainer>
  );
}
