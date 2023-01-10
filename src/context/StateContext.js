import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  useReducer,
} from "react";

export const Store = createContext();

const initialState = {
  darkMode: localStorage.getItem("darkmode") === "ON" ? true : false,
};

export const ContextProvider = ({ children }) => {
  const [activeCart, setActiveCart] = useState(false);

  const themeReducer = (state, action) => {
    switch (action.type) {
      case "LIGHTMODE":
        return { ...state, darkMode: true };
      case "DARKMODE":
        return { ...state, darkMode: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);
  const darkMode = state.darkMode;

  return (
    <Store.Provider
      value={{
        setActiveCart,
        activeCart,
        darkMode,
        dispatch,
      }}>
      {children}
    </Store.Provider>
  );
};

export const useStateContext = () => useContext(Store);
