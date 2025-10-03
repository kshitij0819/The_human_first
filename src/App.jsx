import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import WhatWeDo from './pages/WhatWeDo'
import WhyJoinUs from './pages/WhyJoinUs'
import Events from './pages/Events'
import Voices from './pages/Voices'
import Blog from './pages/Blog'
import GetInvolved from './pages/GetInvolved'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/why-join" element={<WhyJoinUs />} />
              <Route path="/events" element={<Events />} />
              <Route path="/voices" element={<Voices />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/get-involved" element={<GetInvolved />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
