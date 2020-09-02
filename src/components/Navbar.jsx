import React from "react";

const Navbar = prop => {
  const { darkMode, setDarkMode } = prop;
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode( !darkMode );
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={ toggleMode }
          className={ darkMode ? "toggle toggled" : "toggle" }
        />
      </div>
    </nav>
  );
};

export default Navbar;
