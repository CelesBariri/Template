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
    mode: 'dark',
    primary: {
      main: '#ff3b00',
      contrastText: '#001df3',
    },
    secondary: {
      main: '#283593',
      contrastText: '#03a9f4',
    },
    error: {
      main: '#43a047',
      contrastText: '#f30606',
    },
    warning: {
      main: '#ce93d8',
    },
    background: {
      default: '#039be5',
      paper: '#263238',
    },
    info: {
      main: '#c6ff00',
    },
    text: {
      primary: '#4e342e',
      secondary: '#ffc400',
      disabled: '#aeea00',
      hint: '#5500ff',
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
