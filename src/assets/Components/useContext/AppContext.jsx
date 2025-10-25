import { createContext } from "react";

export const AppContext=createContext();
const ContextProvider=(props)=>{
  const phone='91238 90563';
  const Name='Saiteja';
  return(
  <AppContext.Provider value={{Name,phone}}>
    {props.children}
  </AppContext.Provider>
);
}
export default ContextProvider;