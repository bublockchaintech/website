import React from "react";

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "team", "roadmap", "contact"].map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
