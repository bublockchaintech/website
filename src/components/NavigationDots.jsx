import React from "react";
import { linkHelperForNavigationDots } from "../helper/helper";

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "team", "roadmap", "testimotional", "sponsors", "announcements", "contact"].map(
        (item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <button
            onClick={() => linkHelperForNavigationDots(item)}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
}

export default NavigationDots;
