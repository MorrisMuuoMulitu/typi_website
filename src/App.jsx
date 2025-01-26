import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Competitions from './pages/Competitions'
import UxCompetition from './pages/UxCompetition'
import LogoCompetition from './pages/LogoCompetition'
import About from './pages/About'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/ux-competition" element={<UxCompetition />} />
          <Route path="/logo-competition" element={<LogoCompetition />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
