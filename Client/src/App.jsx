import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import SignIn from './Pages/SignIn'
import Login from './Pages/Login'
import Projects from './Pages/Projects'
import Header from './Components/Header'
import BlogFooter from './Components/BlogFooter'
import PrivateRoute from './Components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <BlogFooter />
    </BrowserRouter>
  )
}
