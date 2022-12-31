import { useState } from 'react'
import Home from './Pages/Home'
import Abount from './Pages/Abount'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Abount' element={<Abount/>} />
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          </Routes>
      </BrowserRouter>
      
      
      </>
  )
}

export default App
