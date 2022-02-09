import React, { useContext } from "react";
import { BsMoonStars, BsCloudSun } from "react-icons/bs";
import Context from "../../Context/Context";
function Header() {
  const appState = useContext(Context)
  const [dark,setDark] = appState.dark
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
