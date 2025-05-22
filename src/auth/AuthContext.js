import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // TODO: Fetch user info/token from localStorage, API, etc.
    // For example:
    const savedRole = localStorage.getItem('userRole');
    setUserRole(savedRole || 'guest'); // 'guest' means not logged in
  }, []);

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy usage
export function useAuth() {
  return useContext(AuthContext);
}
