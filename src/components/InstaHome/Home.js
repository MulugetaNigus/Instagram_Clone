import React from "react";
import Phone1 from '../../Assets/phone1.avif'

function Home() {
  return (
    <div className="grid grid-cols-2 items-center justify-center bg-gray-200">
      {/* mobile phones */}
      <img src={Phone1} alt="phone_image" />
      {/* the main form here*/}
      <div className="Instaform">
        {/* title */}
        <p>instagram</p>
        {/* inputs */}
        <input type="text" />
        <input type="text" />
        {/* login btn */}
        <p>Log in</p>
      </div>
    </div>
  );
}

export default Home;
