import { createContext, useReducer, useState } from "react";
import { globalReducer } from "./reducer/global";
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isBusy, setIsBusy] = useState(false);
  const [useUi, uiDispatch] = useReducer(globalReducer, {});

  return (
    <GlobalContext.Provider
      value={{
        isBusy,
        setIsBusy,
        useUi,
        uiDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
