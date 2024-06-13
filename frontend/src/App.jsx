
import './App.css'
import Login from './components/login';
import Signup from './components/signup';
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return(

    <Router>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Signup/>}></Route> 
    </Routes>
    <Toaster></Toaster>
  </Router>
  ) 
}

export default App
