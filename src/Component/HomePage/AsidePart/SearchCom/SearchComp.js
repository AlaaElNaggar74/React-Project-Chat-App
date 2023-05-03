import React, { useState } from "react";
import pic from "../../../../Assets/writer.png";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase-config/Firebase-Config";

const SearchComp = () => {

  let [useName, setUserName] = useState("");
  let [foundedUser, setFoundUser] = useState("");

  let [error, setError] = useState("");
  
  let searchHandler = async () => {
    const userRef = collection(db, "users");

    const q = query(userRef, where("name", "==", useName));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setFoundUser(doc.data());
      });
    } catch (error) {
      setError("Not Found");
    }
  };
  let keyUpHandler = (e) => {
    if (e.code === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className="relative">
      <div className={``}>
        <input
          type="search"
          placeholder="Find User"
          className={` px-2 w-full p-1 focus:outline-none border-b-2 bg-[#21367c] placeholder:text-white `}
          onChange={(e) => setUserName(e.target.value)}
          onKeyUp={keyUpHandler}
        />
      </div>

      {foundedUser ? (
        <div className="bg-[#2d8fed] p-2 absolute left-0 right-0">
          <div className={`flex items-center py-1 cursor-pointer  z-[100]`}>
            <img
              src={pic}
              alt="error"
              className={`w-[45px] rounded-full mr-1`}
            />
            <div className={``}>
              <span className={`font-bold text-black `}>
                {foundedUser.name}
              </span>
              <p className={` text-black`}>Egypt User</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red-500">{error}</p>
      )}
    </div>
  );
};

export default SearchComp;
