import { lazy } from 'react';
import MainLayout from '../layout/mainlayout';
import Loadable from '../component/Loadable';
import AuthGuard from '../guard/AuthGuard';

const Dashboard = Loadable(lazy(() => import('../pages/profile/Dashboard')));
const TrackOrder =  Loadable(lazy(() => import('../pages/trackorder/TrackOrder')));
const CheckoutPage = Loadable(lazy(() => import('../pages/checkout/Checkout')));

const NotFound =()=>{
  return(
    <div>Not Found</div>
  )
}
const MainRoutes = {
  path: '/account',
  element: (
    <AuthGuard>
      <MainLayout/>
    </AuthGuard>
  ),
  children: [
    {
      path: '/account',
      element: <Dashboard/>
    },
    {
      path: 'order-track/',
      element: <TrackOrder/>
    },
    {
      path: 'checkout/',
      element: <CheckoutPage/>
    }
  ],
};

export default MainRoutes;
