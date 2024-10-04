import React, { useState } from "react";
import Phone1 from "../../Assets/phone1.avif";
import playstore from "../../Assets/getinplaystore.jpg";
import microsoft from "../../Assets/getinmicrosoft.jpg";

// icons
import { FaFacebookSquare } from "react-icons/fa";
import Footer from "../Footer/Footer";

function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col bg-gray-200">
      <div className="grid grid-cols-4 items-start justify-center">
        {/* mobile phones */}
        <div className="flex col-span-2">
          <img src={Phone1} alt="phone_image" />
        </div>
        {/* the main form here*/}
        <div className="Instaform mt-10 col-span-2">
          {/* title */}
          <p className="text-center font-light text-5xl">instagram</p>
          {/* inputs */}
          <div className="inputs flex flex-col items-center justify-center">
            {/* username fields */}
            <input
              type="text"
              className="w-3/6 mt-8 mb-3 bg-gray-200 border border-gray-400 p-2 rounded-md text-sm"
              placeholder="Phone number, username or email address"
            />
            {/* password fields */}
            {/* <div className="relative mb-3"> */}
            <input
              type={passwordVisible ? "text" : "password"}
              className="w-3/6 bg-gray-200 border border-gray-400 p-2 rounded-md text-sm pr-20" // Add padding to the right
              placeholder="Password"
            />
            {/* <span
              onClick={togglePasswordVi 149, 246, 1 sibility}
              className="absolute right-3 top-2 text-gray-600 cursor-pointer"
              style={{ pointerEvents: "auto" }}
            >
              {passwordVisible ? "Hide" : "Show"}
            </span> */}
            {/* </div> */}
            {/* login btn */}
            <div className="w-3/6 flex items-center justify-center m-5 border border-violet-700 bg-violet-700 rounded-md p-1">
              <a href="">
                <p className="text-md text-white font-bold">Log in</p>
              </a>
            </div>
            {/* others */}
            <p className="opacity-55 text-sm my-4">OR</p>
            <a href="">
              <p className="text-sm flex gap-3 items-center justify-center text-blue-800">
                <FaFacebookSquare />
                Log In with Facebook
              </p>
            </a>
            <a href="" className="text-blue-800 my-4" style={{ fontSize: 11 }}>
              <p>forgotten your password?</p>
            </a>
          </div>
          {/* extrnal links */}
          <div className="flex items-center justify-center flex-col">
            {/* mini box here */}
            <div className="border border-gray-400 p-4 px-10 my-2 text-sm">
              <p>
                Don't have an account?
                <a href="" className="ml-1">
                  <span className="text-violet-700 font-bold">Sign up</span>
                </a>
              </p>
            </div>
            {/* get the app link */}
            <p className="text-sm my-3">Get the app.</p>
            <div className="downloadLinks flex gap-5">
              <a href="">
                <img src={playstore} alt="platstore_link" className="w-36" />
              </a>
              <a href="">
                <img src={microsoft} alt="microsoft_link" className="w-28" />
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
