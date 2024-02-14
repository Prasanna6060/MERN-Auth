import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div className='bg-gray-300 '>
      <Navbar />
    </div>
    </Router>
  )
}

export default App
