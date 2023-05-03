import { createContext, useContext, useState } from "react";

let   GlobalValue = createContext();

export let GlobalValueProvider = ({ children }) => {
  let [checkedd, setChecked] = useState(true);


  return (
    <GlobalValue.Provider value={{checkedd, setChecked}}>
      {children}
    </GlobalValue.Provider>
  );
};


export  let GlobvaluUsed=()=>{
  return useContext(GlobalValue)
}