import SearchBar from './components/SearchBar'
import './App.css'
import Buildings from './components/Buildings'
import Header from './components/Header'

function App() {
  return (
    <>
      {/* Header */}
      <Header/>
      {/* divider */}
      <div className="h-px w-full mt-2 bg-gray-300"></div>
      {/* Body */}
      <div className="pl-2 pr-2">
        <div className=''>
          <SearchBar/>
        </div>
        <div className="mt-1">
          <Buildings/>
        </div>
      </div>
    </>
  )
}

export default App
