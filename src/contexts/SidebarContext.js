import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // State for sidebar open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the sidebar
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    // Provider component for SidebarContext
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
