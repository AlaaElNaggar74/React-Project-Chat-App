import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Component/LoginPage/LoginPage";
import CreatePage from "./Component/CraeteNewAccount/CreatePage";
import HomePage from "./Component/HomePage/HomePage";
import { GlobalValueProvider } from "./connnnn/ContextApiiiii";
import {
  AuthContextProvider,
  AuthUser,
} from "./Component/AuthContext/AuthContextApi";
function App() {
  let {currentUser}=AuthUser();

  console.log(currentUser);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <LoginPage />
          </>
        }
      />
      <Route
        path="/createLink"
        element={
          <>
            <CreatePage />
          </>
        }
      />
      <Route
        path="/home"
        element={
          <>
            <HomePage />
          </>
        }
      />
    </Routes>
  );
}

export default App;
