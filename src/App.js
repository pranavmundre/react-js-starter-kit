// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, protectedRoutes, componentMap } from './routes/routesConfig';
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
  }, []);

  return (
    <Routes>
      {/* Public routes */}
      {publicRoutes.map(({ path, component }) => {
        const Component = componentMap[component];
        return <Route key={path} path={path} element={<Component />} />;
      })}

      {/* Protected routes */}
      {protectedRoutes.map(({ path, component, roles }) => {
        const Component = componentMap[component];
        return (
          <Route
            key={path}
            path={path}
            element={
              <ProtectedRoute
                element={<Component />}
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
