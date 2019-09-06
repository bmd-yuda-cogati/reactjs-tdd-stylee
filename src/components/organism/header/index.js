import React from "react";

export const Header = () => {
  const logoSrc = "http://logo.com/image.png";
  return (
    <div className="header-container">
      <h1>This is header</h1>
      <img src={logoSrc} className="logo" />
    </div>
  );
};

export default Header;
