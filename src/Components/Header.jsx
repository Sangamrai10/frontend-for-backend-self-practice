import {Route, Routes, Link} from 'react-router-dom'
import Home from '../Pages/Home.jsx'

export default function Header(){
  return <>
  <header>
  <nav>
  <ul>
  <Link to="/">home</Link>
  </ul>
  </nav>
  </header>
  
  
  <Routes>
  <Route path="/" element={<Home/>}/>
  </Routes>
  </>
}