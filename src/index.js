import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2fc6ff',
      contrastText: '#ffffff',
      light: '#1a89d8',
      dark: '#006977',
    },
    secondary: {
      main: '#0277bd',
      contrastText: '#ffffff',
      light: '#5eb9b9',
    },
    error: {
      main: '#b71c1c',
      contrastText: '#eeeeee',
    },
    warning: {
      main: '#ffd600',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    background: {
      default: '#efffff',
      paper: '#8ae8fb',
    },
    info: {
      main: '#ff46d3',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      disabled: '#000000',
      hint: '#000000',
    },
    success: {
      main: '#11bf1d',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
