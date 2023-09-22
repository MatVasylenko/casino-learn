import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import MainPage from '../../pages';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import GamesLayout from '../../layouts/GamesLayout/GamesLayout';
import LoginPage from '../../pages/auth/login';
import RegisterPage from '../../pages/auth/register';
import RoulettePage from '../../pages/games/roulette';
import SlotsPage from '../../pages/games/slots';
import HummerPage from '../../pages/games/hummer';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      }
    ]
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: LoginPage
      },
      {
        path: 'register',
        Component: RegisterPage
      }
    ]
  },
  {
    path: 'games',
    Component: GamesLayout,
    children: [
      {
        path: 'roulette',
        Component: RoulettePage
      },
      {
        path: 'slots',
        Component: SlotsPage
      },
      {
        path: 'hummer',
        Component: HummerPage
      },
    ]
  }
])