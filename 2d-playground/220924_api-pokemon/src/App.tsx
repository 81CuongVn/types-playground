import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import IndexPage from './pages/IndexPage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<IndexPage/>}></Route>
          <Route path='/:id' element={<DetailPage/>}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App
