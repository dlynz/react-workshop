import SearchBar from './components/SearchBar'
import './App.css'
import Room from './components/Room'
import Header from './components/Header'

function App() {
  return (
    <>
      {/* Header */}
      <Header/>
      {/* divider */}
      <div className="h-0.5 w-full mt-3 bg-gray-300"></div>
      {/* Body */}
      <div className="pl-2">
        <div className=''>
          <SearchBar/>
        </div>
        <div className="flex align-content-end flex-wrap mt-1">
          <Room/>
          <Room/>
          <Room/>
          <Room/>
        </div>
      </div>
    </>
  )
}

export default App
