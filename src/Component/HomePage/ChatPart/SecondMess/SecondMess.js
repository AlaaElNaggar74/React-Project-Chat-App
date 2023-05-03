import React from "react";

import pic from "../../../../Assets/manager.png";
const SecondMess = () => {
  return (
    <div className={`flex items-end mb-4 justify-end`}>
      <div className="w-[75%] flex-col items-end ">
        <h1 className="p-3 rounded-br-lg bg-[#97d1e2] rounded-tl-lg my-2 ">
          jkhfbjs dfbv cbvb cvbcv bcvbcvbcv bcvb cvbc vsdnf klsdfgv jkhfbjs
          dfsdnf klsdfgv jkhfbjs dfsdnf klsdfgv jkhfbjs dfsdnf klsdfgv
        </h1>
        <img src={pic} alt="eeeeeee" className="w-[150px] ml-auto" />
      </div>
      <div className="text-center ml-2">
        <img src={pic} alt="" className={`w-[35px] rounded-full mx-auto`} />
        <p className={`text-gray-500`}>12:25 AM</p>
      </div>
    </div>
  );
};

export default SecondMess;
