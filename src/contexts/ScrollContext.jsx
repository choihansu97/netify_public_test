import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const section7Ref = useRef(null);

  const scrollToSection7 = () => {
    section7Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ section7Ref, scrollToSection7 }}>
      {children}
    </ScrollContext.Provider>
  );
};
