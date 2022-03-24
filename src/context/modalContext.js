import { useState, createContext, useContext } from 'react';

const modalContext = createContext();

export const UserModalProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <modalContext.Provider
      value={{
        modalActive,
        setModalActive,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export const UseUserModal = () => {
  return useContext(modalContext);
};
