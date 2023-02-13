import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as sessionActions from './store/session'
import { authenticate } from './services/auth'
import Navbar from './components/Navbar/Navbar'
import LoginModal from './components/LoginModal'
import PasswordModal from './components/PasswordModal'
import SignupModal from './components/SignupModal'
import Home from './components/Home/Home'
import Account from './components/Account/Account'
import SearchPage from './components/SearchPage/SearchPage'
import Footer from './components/Footer/Footer'

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setLoaded(true))
  }, [dispatch])

  useEffect(() => {
    (async () => {
      const user = await authenticate()
      if (!user.errors) {
        setAuthenticated(true)
      }
      setLoaded(true)
    })()
  }, [])

  if (!loaded) {
    return null
  }

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
      <Footer />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/account" element={<Account/>} />
        <Route exact path="/search/:searchquery" element={<SearchPage  loaded={loaded}/>} />
        <Route exact path="/search" element={<SearchPage  loaded={loaded}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
