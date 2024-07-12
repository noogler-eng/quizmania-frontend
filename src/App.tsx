import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './pages/Admin';
import User from './pages/User';
import Home from './pages/Home';
export default function App(){
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

