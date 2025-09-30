import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// AuthGuard component to protect admin routes
interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);
  
  return <>{children}</>;
};

export default AuthGuard;
