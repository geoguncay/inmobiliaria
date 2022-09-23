
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Our from './pages/our'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Advertisements from './pages/advertisements'

function App() {
  return (
    <>
    <Navbar/>
    <Footer/>
    </>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Navbar/>} />
    //     <Route path='/our' element={<Our/> } />
    //     <Route path='/advertisements' element={<Advertisements/> }/>
    //   </Routes>
    // </BrowserRouter>


  )
}

export default App
