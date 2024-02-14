import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
    <div className='bg-gray-300 '>
      <Navbar />
      </div>
      <Routes>
       < Route path='/' element={<Home />}/>
       < Route path='/about' element={<About />}/>
       < Route path='/sign-in' element={<Signin />}/>
       < Route path='/sign-up' element={<Signup />}/>
      </Routes>
   
    </Router>
  )
}

export default App
