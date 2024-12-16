import { lazy } from 'react';
import MainLayout from '../layout/mainlayout';
import Loadable from '../component/Loadable';

const Home = Loadable(lazy(() => import('../pages/home')));
const SingleProductPage = Loadable(lazy(() => import('../pages/product/single/SingleProductPage')));

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
      path: 'product/:slug',
      element: <SingleProductPage/>
    },
    {
      path: '*',
      element:<NotFound/>
    }
  ],
};

export default MainRoutes;
