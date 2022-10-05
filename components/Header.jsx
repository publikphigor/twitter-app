import React from "react";

const Header = () => {
  return (
    <header className="w-full px-[24px] py-4 bg-white shadow">
      <div className="flex items-center justify-between w-full mx-auto lg:w-4/5">
        <h1 className="text-xl font-medium text-sky-900">FindTwitterUser</h1>
        <div>
          {/* {<ion-icon name="sunny-outline"></ion-icon>} */}
          <ion-icon name="moon-outline" className="text-2xl cursor-pointer text-sky-900"></ion-icon>
        </div>
      </div>
    </header>
  );
};

export default Header;
