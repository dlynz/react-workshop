import SearchIcon from '@mui/icons-material/Search';
import WindowIcon from '@mui/icons-material/Window';
import MapIcon from '@mui/icons-material/Map';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useState } from "react";

import { useTheme } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  const [isOpenImage, setIsOpenImage] = useState(true);

  return (
    <div className="flex items-stretch max-h-20 pt-1 pb-2 w-full bg-white dark:bg-gray-800 duration-300">
      {/* Logo and Title */}
      <button
        onClick={() => setIsOpenImage(prev => !prev)}
        className="flex group items-center mt-1 ml-2 cursor-pointer"
      >
        <img
          className="h-auto size-12 opacity-100 group-hover:opacity-70 duration-300"
          src={isOpenImage ? "/freeRoomsLogo.png" : "/freeroomsDoorClosed.png"}
          alt="Logo"
          />
        <p className="text-orange-500 opacity-100 group-hover:opacity-70 duration-300 font-bold text-3xl">Freerooms</p>
      </button>
      {/* Extra Buttons */}
      <div className="flex items-center ml-auto mr-2 mt-3 m-1">
        <button className="flex items-center h-full outline-1 outline-orange-300 rounded pl-1.5 pr-1.5 mr-3
          hover:bg-orange-50 hover:outline-orange-500 duration-300 cursor-pointer dark:outline-orange-500 dark:hover:bg-gray-900
          ">
          <SearchIcon className="text-orange-500"/>
        </button>
        <button className="flex items-center h-full outline-1 outline-orange-500 bg-orange-500 rounded pl-1.5 pr-1.5 mr-3
          hover:bg-orange-700 duration-300 cursor-pointer
          ">
          <WindowIcon className="text-white"/>
        </button>
        <button className="flex items-center h-full outline-1 outline-orange-300 rounded pl-1.5 pr-1.5 mr-3
          hover:bg-orange-50 hover:outline-orange-500 duration-300 cursor-pointer dark:outline-orange-500 dark:hover:bg-gray-900
          ">
          <MapIcon className="text-orange-500"/>
        </button>
        <button className="flex items-center h-full outline-1 outline-orange-300 dark:outline-orange-500 rounded pl-1.5 pr-1.5 mr-1
          hover:bg-orange-50 hover:outline-orange-500 duration-300 cursor-pointer dark:bg-orange-500 dark:hover:bg-orange-700"
          onClick={toggleTheme}
          >
          <DarkModeIcon className="text-orange-500 dark:text-white"/>
        </button>
      </div>
    </div>
  )
}

export default Header