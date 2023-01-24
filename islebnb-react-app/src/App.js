import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
