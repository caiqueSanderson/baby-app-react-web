export const handleVerificationProtected = () => {
    const email = localStorage.getItem('@email');
    const password = localStorage.getItem('@password');
    
    if (!email || !password) {
      window.location.href = '/signin'; 
    }
  };
  
  export const isAuthenticated = () => {
    const email = localStorage.getItem('@email');
    const password = localStorage.getItem('@password');
    
    return email && password ? true : false;
  };