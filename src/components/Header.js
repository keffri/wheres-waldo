import React, { useState } from "react";

const Header = () => {
  const { time, setTime } = useState({ hr: 0, min: 0, sec: 0 });

  return (
    <header className="header">
      <h1 className="header__title">findr</h1>
    </header>
  );
};

export default Header;
