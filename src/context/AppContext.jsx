import React, { useState, useEffect, createContext, useContext } from 'react';

// Context for categories and users
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch categories and users once
    const fetchData = async () => {
      setLoading(true);
      try {
        // Mock data - in real app this would be API calls
        const categoriesData = [
          'Technology', 'Music', 'Art', 'Food', 'Business', 'Sports', 
          'Gaming', 'Education', 'Conference', 'Festival', 'Entertainment', 
          'Culture', 'Wine', 'Startup', 'Networking', 'Marathon', 'Fitness', 
          'Jazz', 'Nightlife', 'Workshop', 'Exhibition'
        ];
        const usersData = [
          { id: 1, name: 'John Doe', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
          { id: 2, name: 'Sarah Smith', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
          { id: 3, name: 'Mike Johnson', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' }
        ];
        setCategories(categoriesData);
        setUsers(usersData);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ categories, users, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};