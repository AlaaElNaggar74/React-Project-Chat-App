import React from "react";
import Aside from "./AsidePart/Aside";
import ChatPart from "./ChatPart/ChatPart";

const HomePage = () => {
  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500`}
    >
      <div className={`flex w-[1000px] max-w-[75%] h-[500px] min-h-[90%]  `}>
        <Aside />
        <ChatPart />
      </div>
    </div>
  );
};

export default HomePage;
