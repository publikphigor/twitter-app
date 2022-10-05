import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="w-full px-[24px] py-4 bg-white shadow">
      <div className="flex items-center justify-between w-full mx-auto lg:w-4/5">
        <h1 className="text-xl font-medium text-sky-900">FindTwitterUser</h1>
        <div>
          <MoonIcon className="text-black h-6 w-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
