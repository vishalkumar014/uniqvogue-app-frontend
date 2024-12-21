import { lazy } from 'react';
import MainLayout from '../layout/mainlayout';
import Loadable from '../component/Loadable';
import GuestGuard from '../guard/GuestGuard';

const Home = Loadable(lazy(() => import('../pages/home')));
const SingleProductPage = Loadable(lazy(() => import('../pages/product/single/SingleProductPage')));
const CategoryPage = Loadable(lazy(() => import('../pages/category/Category')));
const AuthPage = Loadable(lazy(() => import('../pages/auth/Login')));

const NotFound =()=>{
  return(
    <div>Not Found</div>
  )
}
const MainRoutes = {
  path: '/',
  element: (
    <GuestGuard>
      <MainLayout/>
    </GuestGuard>
  ),
  children: [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'product/cid/:slug',
      element: <CategoryPage/>
    },
    {
      path: 'product/:slug',
      element: <SingleProductPage/>
    },
    {
      path: 'login/',
      element: <AuthPage/>
    },
    {
      path: '*',
      element:<NotFound/>
    }
  ],
};

export default MainRoutes;
