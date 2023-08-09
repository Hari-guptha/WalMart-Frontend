import Navbar from "./Components/Navbar"
import Home from "./Components/HomeBody"
import Footer from './Components/Footer'
import PhoneMain from './Components/PhoneMain'
import PhoneCanvas from "./Components/TheeDPhone"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import { Route, Routes } from "react-router-dom"
import FileUploadComponent from "./Components/Dropfile"
import WatchCanvas from "./Components/WatchModel"
import WatchMain from "./Components/WatchMain"


export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/login' element={ <Login/>} />
      <Route path='/signup' element={ <Signup/>} />
      <Route path='/PhoneModel' element={ <PhoneCanvas/>} />
      <Route path='/PhoneMain' element={ <PhoneMain/>} />
      <Route path='/DropFile' element={ <FileUploadComponent/>} />
      <Route path='/WatchModel' element={ <WatchCanvas/>} />
      <Route path='/WatchMain' element={ <WatchMain/>} />
    </Routes>
      <Footer/>
    </div>
  )
}
