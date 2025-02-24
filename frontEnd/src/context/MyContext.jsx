import { createContext, useState } from "react";

export const UserContext = createContext();
export const PagesContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [page, setPages] = useState(1);

  const logUser = (userData) => setUser(userData);
  const setPage = (pageData) => setPages(pageData);

  return (
    <UserContext.Provider value={{ user, logUser }}>
      <PagesContext.Provider value={{ page, setPage }}>
        {children}
      </PagesContext.Provider>
    </UserContext.Provider>
  );
};
