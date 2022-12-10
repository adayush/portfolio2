import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import GridSection from './components/GridSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-slate-900">
      <Header />
      <GridSection />
      <Footer />
    </div>
  )
}

export default App
