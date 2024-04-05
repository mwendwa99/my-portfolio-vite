import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { LightModeTwoTone, DarkModeTwoTone } from "@mui/icons-material";
import { light, dark } from "../redux/slices/themeSlice";
import BasicMenu from "./BasicMenu";

const ButtonAppBar = React.memo(({ theme, changeTheme }) => {
  return (
    <Box id="nav-bar" sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <BasicMenu />
          <Box
            component="div"
            className="d-flex flex-row align-items-center me-auto p-0"
          >
            <Typography variant="h6" className="m-0 p-0">
              Brian Mwendwa
            </Typography>
            <img
              src="plant.svg"
              alt="plant"
              height={20}
              width={20}
              className="ms-2 align-self-center"
            />
          </Box>
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
