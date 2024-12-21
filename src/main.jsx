import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles';
import CustomTheme from './themes/index.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={CustomTheme}> 
    <ReduxProvider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </ThemeProvider>
)
