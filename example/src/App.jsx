import { useState } from 'react'
import './App.css'

function App() {
  const [countView, setCountView] = useState(0);
  let count = 0;

  return (
    <>
      <div className=''>
        <p className='font-bold text-2xl'>
          Hello
        </p>
        <button onClick={() => count = count + 1}>
          increase!
        </button>
        <button onClick={() => setCountView(count)}>
          count is: {countView}
        </button>
      </div>
    </>
  )
}

export default App
