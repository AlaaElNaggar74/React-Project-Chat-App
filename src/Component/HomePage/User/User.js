import React from 'react';
import pic from "../../../Assets/student.png"
import userStyle from "./User.module.css"
const User = () => {
  
  return (
    <>
        <div className={`flex items-center py-1 cursor-pointer`}>
          <img src={pic} alt="error" className={`w-[45px] rounded-full mr-1`} />
          <div className={`${userStyle.userName}`}>
            <span className={`font-bold `} >Name</span>
            <p className={``}>Egypt User</p>
          
          </div>
        </div>
    </>
  );
}

export default User;
