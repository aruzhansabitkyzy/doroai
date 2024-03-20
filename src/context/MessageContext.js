import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const showMessage = (text) => {
    setMessage(text);
  };

  const hideMessage = () => {
    setMessage(null);
  };

  return (
    <MessageContext.Provider value={{ message, showMessage, hideMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  return useContext(MessageContext);
};