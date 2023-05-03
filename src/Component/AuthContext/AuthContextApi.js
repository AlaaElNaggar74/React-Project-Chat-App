import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config/Firebase-Config";

export let Authcontext = createContext();

export let AuthContextProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    let unsubscribe= onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return ()=> unsubscribe();
  }, []);

  return (
    <Authcontext.Provider value={{currentUser}}>
      {children}
    </Authcontext.Provider>
  );
};

export let AuthUser = () => {
  return useContext(Authcontext);
};
