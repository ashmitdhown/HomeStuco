import { SecureAuth } from './secureAuth';

// Production-ready auth check with session validation
export const isAdmin = (): boolean => {
  return SecureAuth.isAuthenticated();
};

// Admin protection HOC with secure authentication
export const withAdminProtection = (Component: React.FC): React.FC => {
  return () => {
    if (!isAdmin()) {
      // Clear any invalid session data
      SecureAuth.logout();
      // Redirect to login
      window.location.href = '/admin';
      return null;
    }
    
    // Refresh session on component access
    SecureAuth.refreshSession();
    return <Component />;
  };
};
