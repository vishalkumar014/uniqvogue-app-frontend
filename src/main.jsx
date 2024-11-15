import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles';
import CustomTheme from './themes/index.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={CustomTheme}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
