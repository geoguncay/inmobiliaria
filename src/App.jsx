
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './pages/404/Error404'
import Home from './pages/home/Home'
import Our from './pages/our/Our'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import Ads from './pages/adds/Ads'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='*' element={<Error/>}/>
          <Route path='/our' element={<Our/>}/>
          <Route path='/ads' element={<Ads/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </BrowserRouter> 
     </>
  )
}

export {App}
