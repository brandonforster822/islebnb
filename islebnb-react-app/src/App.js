import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import LoginModal from './components/LoginModal'
import PasswordModal from './components/PasswordModal'

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Navbar 
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <LoginModal
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <PasswordModal
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
    </BrowserRouter>
  );
}

export default App;
