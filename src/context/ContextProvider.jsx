import React, { useState, useEffect } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    setLanguage("SRB");
  }, []);

  return (
    <Context.Provider value={{language, setLanguage}}>
        {children}
    </Context.Provider>
  );
};

export default ContextProvider;
