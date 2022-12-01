import { createContext, useReducer } from "react";
import alertReducer from "./alert-reducer";

const AlertContext = createContext({
  alert: null,
  setAlert: (message, type) => {}
});

export const AlertProvider = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message, type) => {
    dispatch({ type: "SET_ALERT", payload: { message, type } });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
