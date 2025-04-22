import './App.css'
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>
}

function App() {
  return (
    <>
      <div className='flex justify-center'>
        {/* START HERE */}
        <p className='font-bold text-2xl'>
          Hellooooo!!
          <Welcome name="Kai"/>
        </p>
        <button className='bg-blue-500 hover:bg-red-700 duration-150'>
          Click
        </button>
      </div>
    </>
  )
}

export default App
