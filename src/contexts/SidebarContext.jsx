import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SideBarProvider;
