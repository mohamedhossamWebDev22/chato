import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./style.scss"

import Eng from './pages/Eng';
import Ar from './pages/Ar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Eng />} />
          <Route path="/Ar" element={<Ar />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
