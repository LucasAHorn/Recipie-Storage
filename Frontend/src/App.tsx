import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <nav>
        Put the header for page navigation here
      </nav>

      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>

    </Router>
  )
}

export default App
