import React, { useEffect, useState } from "react";
import asideStyle from "./Aside.module.css";
import pic from "../../../Assets/man.png";
import User from "../User/User";

import { SlClose } from "react-icons/sl";
import { GlobvaluUsed } from "../../../connnnn/ContextApiiiii";
import { AuthUser } from "../../AuthContext/AuthContextApi";

import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase-config/Firebase-Config";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import SearchComp from "./SearchCom/SearchComp";

const Aside = () => {
  let { currentUser } = AuthUser();
  console.log(currentUser);
  let { checkedd, setChecked } = GlobvaluUsed();
  let [userNed, setuserNed] = useState([]);

  let arr = [];
  let navigate = useNavigate();

  let logoutHandler = async () => {
    await signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        console.log("erroe");
      });
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${currentUser?.uid}`), (doc) => {
      setuserNed(doc.data());
      console.log("fgfgfgfgfgfgfgfgfgfgfgfg", doc.data());
    });
  }, [currentUser?.uid]);

  return (
    <div
      className={`${
        checkedd ? asideStyle.asside : asideStyle.show
      } text-white rounded w-[50%] flex-col h-[500px] `}
    >
      <SlClose
        className={`${asideStyle.closeIcon}`}
        onClick={() => setChecked(!checkedd)}
      />
      <div className={` flex justify-between px-2 py-3 bg-blue-950 `}>
        <h1 className={`${asideStyle.chatApp}`}>ElNaggar-Chat</h1>
        <div className={`flex items-center`}>
          <img
            src={pic}
            alt="error"
            className={`${asideStyle.chatUserName} w-[35px] rounded-full mr-1`}
          />
          <div className={`${asideStyle.chatUserName}`}>{userNed?.name} </div>
          <button
            className={`p-1 bg-red-500 rounded ml-1`}
            onClick={logoutHandler}
          >
            LogOut
          </button>
        </div>
      </div>

      <SearchComp />

      <div
        className={`bg-[#21367c] px-2 pt-3 overflow-y-scroll  ${asideStyle.user} `}
      >
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export default Aside;
