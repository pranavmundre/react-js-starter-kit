import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, protectedRoutes,  } from './routes/routesConfig';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider, useAuth } from './auth/AuthContext';
import React, { useEffect } from 'react';

import NotFound from './errors/NotFound';
import Unauthorized from './errors/Unauthorized';


function AppRoutes() {
  const { userRole } = useAuth();
  const appName = process.env.REACT_APP_NAME || 'My App';

  useEffect(() => {
    document.title = appName;
  }, [appName]);

  return (
    <Routes>
      {/* Public routes */}
      {publicRoutes.map(({ Path, Component }) => {
        return <Route key={Path} path={Path} element={<Component/>} />;
      })}
  
      {/* Protected routes */}
      {protectedRoutes.map(({ Path, Component, roles }) => {
        return (
          <Route
            key={Path}
            path={Path}
            element={
              <ProtectedRoute
                element={Component}
                roles={roles}
                userRole={userRole}
              />
            }
          />
        );
      })}

      {/* Unauthorized and NotFound */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
