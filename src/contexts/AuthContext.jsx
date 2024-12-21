import PropTypes from 'prop-types';
import { createContext, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {logOut,setAuth} from '../store/reducers/auth'

const verifyToken = (serviceToken) => {
  if (!serviceToken) {
    return false;
  } else {
    return true
  }
};

const setSession = (serviceToken) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken)
  } else {
    localStorage.clear()
  }
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()
  const data     = useSelector((state)=>state.auth)
  
  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem('serviceToken');
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          dispatch(setAuth({isLoggedIn:true}));
        } else {
          logout();
        }
      } catch (err) {
        logout();
      }
    };
    init();
  }, []);

  const login = async () => {    
    setSession('frrpeognregureogtureioturet');
    dispatch(setAuth({isLoggedIn:true}));
  };

  const logout = () => {
    setSession(null);
    dispatch(logOut());
  };

  return <AuthContext.Provider value={{login, logout,...data }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export default AuthContext;
