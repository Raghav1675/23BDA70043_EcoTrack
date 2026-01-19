import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Logs from './pages/Logs.jsx'
import Trig from './triggers/Trig.jsx' 
function App() {
const {width,height}=Trig()
  return (
    <>
    <Header title="Ecotrack"/>
    <Dashboard/>
    <Logs/>
    <p>Window Size: {width}px - {height}px</p>
    </>
  )
}

export default App
