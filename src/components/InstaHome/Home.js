import React, { useState, useEffect } from "react";
import Phone1 from "../../Assets/phone1.png";
import chat1 from "../../Assets/screenshot1-2x.png";
import chat2 from "../../Assets/screenshot1.png";
import chat3 from "../../Assets/screenshot2-2x.png";
import chat4 from "../../Assets/screenshot2.png";
import chat5 from "../../Assets/screenshot3-2x.png";
import chat6 from "../../Assets/screenshot3.png";
import chat7 from "../../Assets/screenshot4-2x.png";
import chat8 from "../../Assets/screenshot4.png";
import backImg from "../../Assets/backIPhone.png";

import playstore from "../../Assets/getinplaystore.jpg";
import microsoft from "../../Assets/getinmicrosoft.jpg";

// icons
import { FaFacebookSquare } from "react-icons/fa";
import Footer from "../Footer/Footer";

function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(chat1);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const imgUrl = [chat1, chat2, chat3, chat4, chat5, chat6, chat7, chat8];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(imgUrl[Math.floor(Math.random() * imgUrl.length)]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [imgUrl]);

  return (
    <>
      <div className="flex flex-row items-start justify-center gap-10 bg-gray-200">
        <div className="flex mt-5">
          <div style={{ position: "relative", width: "auto", height: "auto" }}>
            
            <img
              src={Phone1}
              alt="Phone Case"
              style={{ width: "95%", height: "100%" }}
            />
            
            {/*             
          <img
              src={backImg}
              alt="Inner Image"
              style={{
                position: "absolute",
                top: "40.5%",
                left: ".5%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "94%",
              }}
            /> */}

            <img
              src={currentImage}
              alt="Inner Image"
              style={{
                position: "absolute",
                top: "49.8%",
                left: "47.5%",
                transform: "translate(-50%, -50%)",
                width: "62%",
                height: "89%",
              }}
            />
          </div>
        </div>
        <div className="Instaform mt-10">
          <div className="inputs flex flex-col items-center justify-center  border border-gray-400 py-12 px-5">
            <p className="text-center text-gray-700 font-extralight text-5xl font-insta2">
              instagram
            </p>
            <input
              type="text"
              className="w-full mt-8 mb-3 bg-gray-200 border border-gray-400 p-2 rounded-md text-sm"
              placeholder="Phone number, username or email address"
            />
            <input
              type={passwordVisible ? "text" : "password"}
              className="w-full bg-gray-200 border border-gray-400 p-2 rounded-md text-sm pr-20"
              placeholder="Password"
            />
            <div className="w-full flex items-center justify-center m-5 border border-violet-700 bg-violet-700 rounded-md p-1">
              <a href="">
                <p className="text-md text-white font-bold">Log in</p>
              </a>
            </div>
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
          <div className="flex items-center justify-center flex-col">
            <div className="border border-gray-400 p-4 px-12 my-2 text-sm">
              <p>
                Don't have an account?
                <a href="" className="ml-1">
                  <span className="text-violet-700 font-bold">Sign up</span>
                </a>
              </p>
            </div>
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
