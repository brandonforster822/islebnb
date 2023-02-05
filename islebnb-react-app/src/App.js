import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import LoginModal from './components/LoginModal'
import PasswordModal from './components/PasswordModal'
import SignupModal from './components/SignupModal'
import Home from './components/Home/Home'

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
      <SignupModal
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
