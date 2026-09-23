import { Routes, Route } from 'react-router'
import { LandingPage } from './pages/LandingPage'
import { Projects } from './pages/Projects'
import { AboutMe } from './pages/AboutMe'
import { Musics } from './pages/Musics'

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<LandingPage />}/>
      <Route path="aboutMe" element={<AboutMe />}/>
      <Route path="projects" element={<Projects />}/>
      <Route path="musics" element={<Musics />}/>
    </Routes>

  )
}

export default App
