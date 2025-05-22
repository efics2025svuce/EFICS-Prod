
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import ConferenceTheme from "./pages/ConferenceTheme"
import Schedule from './pages/Schedule'
import Calls from './pages/Calls'

function App() {
    

  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/ConferenceTheme" element={<ConferenceTheme/>}/>
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/Calls" element={<Calls/>}/>

        </Routes>
      </Router>




    </>
  )
}

export default App
