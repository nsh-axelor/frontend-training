import React from "react";
import { BsMoonStars, BsCloudSun } from "react-icons/bs";
function Header({ dark, setDark }) {
  return (
    <div className="header">
      <h1>Note's App</h1>
      <div className="toggle">
      {!dark ? (
        <BsMoonStars
          className="moon-icon"
          onClick={() => setDark(!dark)}
          size="1.5em"
        />
      ) : (
        <BsCloudSun
          className="sun-icon"
          onClick={() => setDark(!dark)}
          size="1.5em"
        />
      )}
      </div>
    </div>
  );
}

export default Header;
