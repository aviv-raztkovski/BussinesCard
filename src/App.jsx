import { useState } from 'react'
import Info from './Components/Info'
import Section from './Components/Section'
import Footer from './Components/Footer'
import './App.css'

function App() {
  const linkes = {
    linkedIn: "#",
    github: "#"
  }

  return (
    <div className="App">
      <Info />
      <Section title="About" />
      <Section title="Interests" />
      <Footer linkes={linkes} />
    </div>
  )
}

export default App
