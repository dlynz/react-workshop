import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';

import { useState } from 'react';

function SearchBar() {
    return (
      <div className="flex ml-4 mr-4 mt-4 mb-2 items-stretch gap-3">
        <div 
          className="
            flex min-w-120 items-center p-2 border-2 border-gray-300 rounded-md outline-0 outline-gray-500
            focus-within:border-orange-500 focus-within:outline-1 focus-within:outline-offset-4
            focus-within:outline-transparent justify-items-stretch
            transition-all duration-200 ease-in-out mr-auto"
          >
          <SearchIcon className="text-gray-500" />
          <input className = "flex-grow outline-none" type="text" placeholder="Search for a building..."></input>
        </div>
        <div className="flex justify-end items-stretch pr-2">
          <button className="flex justify-center items-center border-2 cursor-pointer
            text-orange-500 font-bold border-orange-500 rounded-md w-30 mr-2"
            >
            <FilterAltIcon className="text-orange-500 pr-2 scale-150" />
            <p>Filters</p>
          </button>
          <button className="flex justify-center items-center border-2 cursor-pointer
            text-orange-500 font-bold border-orange-500 rounded-md w-30"
            >
            <FilterListIcon className="text-orange-500 pr-2 scale-150" />
            Sort
          </button>
        </div>
      </div>
    )
}

export default SearchBar
