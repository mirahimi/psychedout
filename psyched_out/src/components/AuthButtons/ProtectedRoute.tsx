import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? children : <div>Please log in to access this page.</div>;
};

export default ProtectedRoute;