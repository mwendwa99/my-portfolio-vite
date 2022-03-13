import { useReducer } from 'react';
import './App.css';
// theme
import { darkMode, lightMode } from './Theme';
import { ThemeProvider } from '@mui/material/styles';
// components
import Navbar from './components/NavBar'
// sections
import Landing from './sections/Landing';

const initialValue = { theme: darkMode };

const reducer = (state, action) => {
  switch (action.type) {
    case 'light':
      return {
        ...state,
        theme: lightMode
      }
      break;

    case 'dark':
      return {
        ...state,
        theme: darkMode
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
      <Navbar />
      <Landing />
    </ThemeProvider>
  )
}

export default App
