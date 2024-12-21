import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate,useLocation} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (isLoggedIn) {
      if (location.pathname === '/login/' || location.pathname === '/login'){
        navigate('/account', { replace: true });
      }
    }
  }, [isLoggedIn, navigate]);

  return children;
};

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default GuestGuard;
