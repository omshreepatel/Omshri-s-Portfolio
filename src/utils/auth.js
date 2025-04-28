// src/admin/utils/auth.js

// Save login status (set 'isAdmin' to true in sessionStorage)
export const login = () => {
    sessionStorage.setItem('isAdmin', 'true');
  };
  
  // Logout admin (remove 'isAdmin' from sessionStorage)
  export const logout = () => {
    sessionStorage.removeItem('isAdmin');
  };
  
  // Check admin status (return true if 'isAdmin' is in sessionStorage)
  export const isAdmin = () => {
    return sessionStorage.getItem('isAdmin') === 'true';
  };
  
  // Require admin access and redirect if not an admin
  export const requireAdmin = (navigate) => {
    if (!isAdmin()) {
      // Redirect to login page if not an admin
      navigate('/login'); // Adjust the route as needed
    }
  };
  