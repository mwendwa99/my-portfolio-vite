import { useReducer } from 'react';
import './App.css';
// mui
import { LightModeTwoTone, DarkModeTwoTone } from '@mui/icons-material';
// theme
import { darkMode, lightMode } from './Theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// components
import Navbar from './components/NavBar'
// sections
import Landing from './sections/Landing';

const initialValue = {
  theme: darkMode,
  icon: <DarkModeTwoTone />
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'light':
      return {
        ...state,
        theme: lightMode,
        icon: <LightModeTwoTone />
      }
      break;

    case 'dark':
      return {
        ...state,
        theme: darkMode,
        icon: <DarkModeTwoTone />
      }
      break;

    default:
      return { initialValue }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <ThemeProvider theme={state.theme}>
      <CssBaseline />
      <Navbar icon={state.icon} theme={state.theme} changeTheme={dispatch} />
      <Landing />
    </ThemeProvider>
  )
}

export default App
