import { lazy } from 'react';
import MainLayout from '../layout/mainlayout';
import Loadable from '../component/Loadable';



const Home = Loadable(lazy(() => import('../pages/home')));


const NotFound =()=>{
  return(
    <div>Not Found</div>
  )
}
const MainRoutes = {
  path: '/',
  element: (
    <MainLayout/>
  ),
  children: [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '*',
      element:<NotFound/>
    }
  ],
};

export default MainRoutes;
