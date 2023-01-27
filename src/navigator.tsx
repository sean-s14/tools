import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import {
  Menu,
  Home,
  ChangeCircleOutlined,
  EngineeringOutlined,
  QuestionMarkOutlined,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

interface IRoutes {
  title: string;
  path: string;
  Icon?: any;
}

const mainRoutes: IRoutes[] = [
  {
    title: "Home",
    path: "/",
    Icon: Home,
  },
  {
    title: "Conversion",
    path: "/conversion",
    Icon: ChangeCircleOutlined,
  },
  {
    title: "Generators",
    path: "/generators",
    Icon: EngineeringOutlined,
  },
  {
    title: "Other",
    path: "/other",
    Icon: QuestionMarkOutlined,
  },
];

const routes: IRoutes[] = [
  {
    title: "Temperature",
    path: "/conversion/temperature",
  },
  {
    title: "Password",
    path: "/generators/password",
  },
  {
    title: "BMI Calculator",
    path: "/other/bmi",
  },
];

const drawerWidth = 240;

export default function Navigator() {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleDrawer() {
    setDrawerOpen((prev) => !prev);
  }

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          height: 70,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { sm: "center" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>

          {mainRoutes?.map(({ title, path }, index) => (
            <Button
              key={index}
              onClick={() => navigate(path)}
              sx={{
                display: { xs: "none", sm: "block" },
                my: 2,
                mx: 2,
                color: "white",
                bgcolor: location?.pathname === path ? "#444" : "inherit",
              }}
            >
              {title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* Side Nav */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawer} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Tools
            </Typography>
            <Divider />
            <List>
              {mainRoutes?.map(({ title, path, Icon }, index) => (
                <>
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => navigate(path)}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        px: 0,
                        pb: 0,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <ListItemIcon sx={{ ml: 1, py: 1, minWidth: "28px" }}>
                          <Icon sx={{ fontSize: "28px" }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={title}
                          sx={{
                            pl: 1,
                            "& .MuiTypography-root": { fontSize: 20 },
                          }}
                        />
                      </Box>

                      {/* Inner List */}
                      <List sx={{ width: "100%", py: 0 }}>
                        {routes?.map(
                          ({ title, path: path2 }, index) =>
                            path2.includes(path) &&
                            path !== "/" && (
                              <ListItem key={index} disablePadding>
                                <ListItemButton
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    navigate(path2);
                                    handleDrawer();
                                  }}
                                >
                                  <ListItemText
                                    primary={title}
                                    sx={{ pl: 5 }}
                                  />
                                </ListItemButton>
                              </ListItem>
                            )
                        )}
                      </List>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
