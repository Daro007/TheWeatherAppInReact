import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Header() {
  return (
    <div>
      <header className="header">
        <h1>
          The Weather App <TiWeatherPartlySunny></TiWeatherPartlySunny>{" "}
        </h1>
      </header>
    </div>
  );
}

export default Header;
