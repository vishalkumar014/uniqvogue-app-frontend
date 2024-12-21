import { useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

export default function ThemeRoutes() {
  return useRoutes([MainRoutes,AuthRoutes]);
}
