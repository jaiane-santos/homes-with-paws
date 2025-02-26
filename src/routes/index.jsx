import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "../components/Header/index"
import Footer from "../components/Footer/index"
import Home from '../pages/Home'
import Ipet from "../pages/ipet"
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
import Error from "../pages/Error"

function RouterApp
() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/detalhes" element={<Ipet />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default RouterApp
