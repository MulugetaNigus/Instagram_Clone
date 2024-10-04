import React from "react";

function Footer() {
  return (
    <>
      <div
        className="flex flex-row gap-4 items-center justify-center mt-10 mb-4"
        style={{ fontSize: 11 }}
      >
        <a href="">Meta</a>
        <a href="">About</a>
        <a href="">Blog</a>
        <a href="">Jobs</a>
        <a href="">Help</a>
        <a href="">API</a>
        <a href="">Privacy</a>
        <a href="">Terms</a>
        <a href="">Locations</a>
        <a href="">Instagram</a>
        <a href="">Lite</a>
        <a href="">Threads</a>
        <a href="">Contact</a>
      </div>
      {/* another section of the footer one side selection of many language and the other side the licenses*/}
      <div
        className="flex flex-row gap-4 items-center justify-center mt-4 mb-10 text-sm"
        style={{ fontSize: 11 }}
      >
        <select name="select-lan" id="lan">
          <option value="English (UK)">English (UK)</option>
          <option value="French">French</option>
          <option value="Italiy">Italiy</option>
          <option value="China">China</option>
          <option value="Amharic">Amharic</option>
        </select>
        <p>© 2024 Instagram from Meta</p>
      </div>
    </>
  );
}

export default Footer;
