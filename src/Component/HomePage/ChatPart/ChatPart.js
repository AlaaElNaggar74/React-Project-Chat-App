import React, { useState } from "react";

// import  {AiOutlineUserAdd } from "react-icons/AiOutlineUserAdd"


import { TiUserOutline } from "react-icons/ti";
import { TfiMoreAlt } from "react-icons/tfi";
import { HiDocumentAdd } from "react-icons/hi";

import { HiBell } from "react-icons/hi";
// import { HiChatAlt2 } from "react-icons/hi";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import Message from "./Message/Message";
import SecondMess from "./SecondMess/SecondMess";

import { SlClose } from "react-icons/sl";

import { TfiAlignJustify } from "react-icons/tfi";
import { GlobvaluUsed } from "../../../connnnn/ContextApiiiii";


import chatPartStyle from "./ChatPart.module.css"

const ChatPart = () => {
  let { checkedd, setChecked } = GlobvaluUsed();
  return (
    <div className={` `}>
      <div
        className={`${checkedd?chatPartStyle.ChatPartDiv:chatPartStyle.xcv}  w-full  bg-red-500 h-full  `}
      >
        
        <div
          className={`heaad text-white  py-3 bg-[#122c85] relative flex justify-between w-full p-3`}
        >
          {checkedd?
          <TfiAlignJustify
          className={`${chatPartStyle.burgerIcon}`}
          onClick={() => setChecked(!checkedd)}
        />
        : ""
        }
          <h1 className={`w-full ${chatPartStyle.title} `}>
          alaa</h1>
          <div className="flex">
            <HiDocumentAdd className={`m-1 cursor-pointer text-2xl`} />
            <TiUserOutline className={` m-1 cursor-pointer text-2xl`} />
            <TfiMoreAlt className={` m-1 cursor-pointer text-2xl`} />
          </div>
        </div>
        <div
          className={`bg-[#e5e5e5] overflow-y-scroll py-4 px-4  ${chatPartStyle.chatBox}`}
        >
          <Message />
          <SecondMess />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <div className={`inputChat flex items-center p-2 bg-white `}>
          <input
            type="text"
            placeholder="Tyoe To Sending"
            className={`focus:outline-none w-full p-1`}
          />
          <HiBell className={`m-1 text-2xl cursor-pointer`} />
          <label htmlFor="upload">
            <BsFillFolderSymlinkFill
              className={`m-1 text-2xl cursor-pointer`}
            />
          </label>
          <input type="file" name="" id="upload" className="hidden" />

          <button className={`bg-red-500 py-2 px-3 m-1 rounded`}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPart;
