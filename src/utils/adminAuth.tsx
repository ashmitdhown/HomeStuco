// Simple auth check for admin
export const isAdmin = (): boolean => {
  return localStorage.getItem('adminAuthenticated') === 'true';
};

// Admin protection HOC to wrap around components
export const withAdminProtection = (Component: React.FC): React.FC => {
  return () => {
    if (!isAdmin()) {
      window.location.href = '/admin';
      return null;
    }
    
    return <Component />;
  };
};
