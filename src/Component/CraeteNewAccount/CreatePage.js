import React, { useState } from "react";
import createStyle from "./CreatePage.module.css";
import { Link ,useNavigate} from "react-router-dom";
import avatar from "../../Assets/mmm.bmp";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, storage, db } from "../firebase-config/Firebase-Config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  doc,
  collection,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { v4 } from "uuid";
const CreatePage = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  // let [file, setFile] = useState("");
  let navigate=useNavigate()

  let [resulte, setResulte] = useState("");

  let submitHandeler = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (res) => {
          setResulte(res);
          console.log(res);
          setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            name,
            email,
            password,
          });
          setDoc(doc(db, "userChats", res.user.uid), {});
        }
      );
      navigate("/home")
      setEmail("");
      setName("");
      setPassword("")
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={`LoginPage w-full min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center `}
    >
      <div
        className={`boxEntery bg-white py-5 px-5 max-w-[90%] w-[450px]  rounded-lg  `}
      >
        <h1 className={`text-center text-3xl mb-2 `}>Create New Account </h1>
        <form onSubmit={submitHandeler}>
          <input
            required
            className={`focus:outline-none border-b-2 w-full rounded p-2 my-1 placeholder:italic placeholder:text-slate-400  border-slate-300`}
            type="naem"
            placeholder="Enter Your Name "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            className={`focus:outline-none border-b-2 w-full rounded p-2 my-1 placeholder:italic placeholder:text-slate-400  border-slate-300`}
            type="email"
            placeholder="Enter Your Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className={`focus:outline-none border-b-2 w-full rounded p-2 my-1 placeholder:italic placeholder:text-slate-400  border-slate-300`}
            type="password"
            placeholder="Enter Your Password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={`py-2 px-4 bg-red-900 mt-4 block mx-auto rounded text-white`}
          >
            Submit
          </button>
          {/* </Link> */}
        </form>
        <p className={`mt-5 text-gray-600`}>
          You Can Go To Login Page From Here?
          <span className={`text-blue-600 ml-2`}>
            <Link to="/">Login Page</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CreatePage;
