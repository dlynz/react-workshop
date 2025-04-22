import './App.css'

function TheButton() {
    return (
    <span class="bg-violet-500 hover:bg-red-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-red-700 " onmouseover="this.innerText='I lied. Now u die.'" onmouseout="this.innerText='Not a bomb'">
    Not a bomb
    </span>
    );
  }

  
function App() {
  return (
    <>
      <div className=''>
        {/* START HERE */}
        <p className='text-2xl'>
          <TheButton></TheButton>
        </p>
      </div>
    </>
  )
}

export default App