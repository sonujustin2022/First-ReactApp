
import { Route, Routes } from 'react-router-dom'
import About from './About'
import './App.css'
import Contact from './Contact'
import Features from './Features'
import Header from './Header'
import Home from './Home'


function App() {


  return (
    <>
    <Header/>
<Routes>
  <Route path='/' element= {<Home/>} />
  <Route path='/About' element= {<About/>} />
  <Route path='/Features' element= {<Features/>} />
  <Route path='/Contact' element= {<Contact/>} />
</Routes>
    </>
  )
}

export default App
