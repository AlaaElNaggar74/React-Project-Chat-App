import React from "react";
import pic from "../../../../Assets/writer.png";
import pic2 from "../../../../Assets/student(1).png";
import { AuthUser } from "../../../AuthContext/AuthContextApi";
const Message = () => {
  return (
    <div className={`flex items-end mb-4`}>
      <div className="text-center mr-2">
        <img src={pic2} alt="" className={`w-[35px] rounded-full mx-auto`} />
        <p className={`text-gray-500`}> 12:25 AM</p>
      </div>
      <div>
        <div className="w-[75%] flex-col items-end ">
          <h1 className="p-3 rounded-br-lg bg-white rounded-tl-lg my-2 ">
            jkhfbjs dfbv cbvb cvbcv bcvbcvbcv bcvb cvbc vsdnf klsdfgv jkhfbjs
            dfsdnf klsdfgv jkhfbjs dfsdnf klsdfgv jkhfbjs dfsdnf klsdfgv
          </h1>
          <img src={pic} alt="eeeeeee" className="w-[150px] mr-auto" />
        </div>
      </div>
    </div>
  );
};

export default Message;
