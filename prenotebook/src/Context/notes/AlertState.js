import React, { createContext, useState } from "react";

// Createcontext
const AlertContext = createContext();

const AlertState = (props) => {
  // Alert Setup
  const [alertVar, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <AlertContext.Provider value={{ alertVar, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
export { AlertContext };
