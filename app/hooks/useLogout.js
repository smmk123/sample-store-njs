import axios from '../api/limitless';
import useAuth from './useAuth';

const useLogout = () => {
  const { auth, setAuth } = useAuth();
  const refreshToken = localStorage.getItem('refreshToken');

  const logout = async () => {
    try {
      await axios.post('/v1/auth/logout', { refreshToken });
      setAuth({});
      localStorage.removeItem('refreshToken');
      localStorage.setItem('persist', false);
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
