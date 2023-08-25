import { Outlet } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Outlet />
      <h1>GitHub Finder</h1>
    </div>
  )
}

export default App
