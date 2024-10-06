import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setuser] = useState();
  const [signinLoading, setSigninLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setuser,
        signinLoading,
        registerLoading,
        setSigninLoading,
        setRegisterLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
