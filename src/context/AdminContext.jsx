import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const useAdminContext = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [AdminMod, setAdminMod] = useState(false);

  return (
    <AdminContext.Provider value={{ AdminMod, setAdminMod }}>
      {children}
    </AdminContext.Provider>
  );
};
