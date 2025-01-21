import React from 'react'
    import { Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import Competitions from './pages/Competitions'
    import UxCompetition from './pages/UxCompetition'
    import About from './pages/About'
    import Contact from './pages/Contact'
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    function App() {
      return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/ux-competition" element={<UxCompetition />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )
    }

    export default App
