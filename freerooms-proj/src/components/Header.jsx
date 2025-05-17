import SearchIcon from '@mui/icons-material/Search';
import WindowIcon from '@mui/icons-material/Window';
import MapIcon from '@mui/icons-material/Map';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import React, { useState } from "react";

function Header() {
  const [isOpenImage, setIsOpenImage] = useState(true);

  return (
    <div className="flex items-stretch max-h-20 mt-1 w-full">
      {/* Logo and Title */}
      <button
        onClick={() => setIsOpenImage(prev => !prev)}
        className="flex group items-center mt-1 ml-2 cursor-pointer"
      >
        <img
          className="h-auto size-12 opacity-100 group-hover:opacity-70 duration-300"
          src={isOpenImage ? "../public/freeroomsLogo.png" : "../public/freeroomsDoorClosed.png"}
          alt="Logo"
          />
        <p className="text-orange-500 opacity-100 group-hover:opacity-70 duration-300 font-bold text-3xl">Freerooms</p>
      </button>
      {/* Extra Buttons */}
      <div className="flex items-center ml-auto mr-2 mt-3 m-1">
        <button className="flex items-center h-full outline-1 outline-orange-300 rounded pl-1.5 pr-1.5 mr-3
          hover:bg-orange-50 hover:outline-orange-500 duration-200 cursor-pointer
          ">
          <SearchIcon className="text-orange-500"/>
        </button>
        <button className="flex items-center h-full outline-1 outline-orange-500 bg-orange-500 rounded pl-1.5 pr-1.5 mr-3
          hover:bg-orange-700 duration-200 cursor-pointer
          ">
          <WindowIcon className="text-white"/>
        </button>
        <button className="flex items-center h-full outline-1 outline-orange-300 rounded pl-1.5 pr-1.5 mr-3
          hover:bg-orange-50 hover:outline-orange-500 duration-200 cursor-pointer
          ">
          <MapIcon className="text-orange-500"/>
        </button>
        <button className="flex items-center h-full outline-1 outline-orange-300 rounded pl-1.5 pr-1.5 mr-1
          hover:bg-orange-50 hover:outline-orange-500 duration-200 cursor-pointer
          ">
          <DarkModeIcon className="text-orange-500"/>
        </button>
      </div>
    </div>
  )
}

export default Header