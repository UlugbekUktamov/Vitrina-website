import React from 'react'
import { ToastContainer } from 'react-toastify'
import "./App.css"
import Footer from './components/Footer'
import Header from './components/Header'
import Shop from "./components/Shop"

export default function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </div>
  )
}
