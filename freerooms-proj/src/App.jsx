import SearchBar from './components/SearchBar'
import './App.css'
import Buildings from './components/Buildings'
import Header from './components/Header'

import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen dark:bg-gray-900 duration-300">
      {/* Header */}
      <Header/>
      {/* Divider */}
      <div className="h-px w-full bg-gray-300 dark:bg-gray-700 duration-300"></div>
      {/* Body */}
      <div className="pl-2 pr-2">
        <div>
          <SearchBar setSearch={setSearch}/>
        </div>
        <div className="mt-1">
          <Buildings search={search}/>
        </div>
      </div>
    </div>
  )
}

export default App
