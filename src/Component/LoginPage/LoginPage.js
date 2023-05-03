import React, { useState } from "react";

import loginStyle from "./LoginPage.module.css";
import { Link } from "react-router-dom";

import { auth } from "../firebase-config/Firebase-Config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();

  let submitHandeler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      setError("SomeThing Wrong");
      let x=setTimeout(()=>{
            setError("");
          },2000)
          
    }
  };
  return (
    <div
      className={`LoginPage w-full min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-6 flex items-center justify-center`}
    >
      <div
        className={`boxEntery bg-white  py-5 px-5 max-w-[90%] w-[450px] rounded-lg  m-auto`}
      >
        <h1 className={`text-center text-4xl`}>El-Naggar Chat</h1>
        <h1 className={`text-center text-2xl mb-2 mt-2`}>Login</h1>
        {error ? <p className="text-red-500">{error}</p> : ""}
        <form onSubmit={submitHandeler}>
          <input
            required
            className={`focus:outline-none border-b-2 w-full rounded p-3 my-1 placeholder:italic placeholder:text-slate-400  border-slate-300`}
            type="email"
            placeholder="Enter Your Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className={`focus:outline-none border-b-2 w-full rounded p-3 my-1 placeholder:italic placeholder:text-slate-400  border-slate-300`}
            type="password"
            placeholder="Enter Your Password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className={`py-2 px-4 bg-red-900 mt-4 block mx-auto rounded text-white`}
          >
            Login
          </button>
        </form>
        <p className={`mt-5 text-gray-600`}>
          You Can Creat New E-Mail From Here?
          <span className={`text-blue-600 ml-2`}>
            <Link to="createLink">Create Page</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
