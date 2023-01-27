import { Stack, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";

interface IRoutes {
  title: string;
  path: string;
}

export default function SubRouteList({ routes }: any) {
  return (
    <Stack spacing={2}>
      {routes?.map(({ title, path }: IRoutes, index: number) => (
        <Paper
          key={index}
          elevation={8}
          sx={{
            width: 300,
            height: 60,
          }}
        >
          <NavLink
            to={path}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              width: "100%",
              height: "100%",

              fontSize: 24,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {title}
          </NavLink>
        </Paper>
      ))}
    </Stack>
  );
}
