import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { admin } from "./redux/slices/themeSlice";
import { useAuth0 } from "@auth0/auth0-react";
// mui
import { Container, createTheme } from "@mui/material";
import {
  LaptopTwoTone,
  AccountTreeTwoTone,
  ConnectWithoutContactTwoTone,
} from "@mui/icons-material";
// theme
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// components
import { NavBar, Divider } from "./components";
// sections
import { Landing, WhatIDo, Projects, Contact } from "./sections";

function App() {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const theme = createTheme(useSelector((state) => state.theme.mode));
  // check if user is logged in then change theme
  useEffect(() => {
    isAuthenticated ? dispatch(admin()) : null;
  }, [isAuthenticated, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar
        isAuthenticated={isAuthenticated}
        theme={theme}
        changeTheme={dispatch}
      />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <div style={{ border: isAuthenticated && "1px dashed white" }}>
          <Landing />
        </div>
        <Divider label="What I Do" icon={<LaptopTwoTone fontSize="medium" />} />
        <div style={{ border: isAuthenticated && "1px dashed blue" }}>
          <WhatIDo />
        </div>
        <Divider
          label="Projects"
          icon={<AccountTreeTwoTone fontSize="medium" />}
        />
        <div style={{ border: isAuthenticated && "1px dashed yellow" }}>
          <Projects />
        </div>
        <Divider
          label="Contact"
          icon={<ConnectWithoutContactTwoTone fontSize="medium" />}
        />
        <div style={{ border: isAuthenticated && "1px dashed purple" }}>
          <Contact />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
