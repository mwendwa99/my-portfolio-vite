import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { LightModeTwoTone, DarkModeTwoTone } from "@mui/icons-material";
import { light, dark } from "../redux/slices/themeSlice";
import BasicMenu from "./BasicMenu";

const ButtonAppBar = React.memo(({ theme, changeTheme }) => {
  return (
    <Box id="nav-bar" sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <BasicMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brian Mwendwa
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="theme-toggle"
            onClick={() => {
              theme.palette.mode === "light"
                ? changeTheme(dark())
                : changeTheme(light());
            }}
          >
            {theme.palette.mode === "light" ? (
              <DarkModeTwoTone />
            ) : (
              <LightModeTwoTone />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default ButtonAppBar;
