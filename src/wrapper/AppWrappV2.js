import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrapV2 = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2022 Blokchain Tech Club</p>
            <p className="p-text">Tum Haklari Saklidir</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapV2;
