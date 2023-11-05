import React, { createContext, useContext } from "react";

const ApiContext = createContext();

export const useApiContext = () => {
  return useContext(ApiContext);
};

const ApiProvider = ({ children }) => {
  const apiUrl =
    //"http://localhost/projects/valmaz_backend/valmaz_web_site_backend";
    "http://valmaz.com/valmaz_web_site_backend";
  return (
    <ApiContext.Provider value={{ apiUrl }}>{children}</ApiContext.Provider>
  );
};

export default ApiProvider;
