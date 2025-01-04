import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './navbar.jsx';  
import HowItWorks from './howitworks.jsx';  
import Features from './features.jsx';  
import AboutUs from './aboutus.jsx';  
import Footer from './footer.jsx';  
import App from './App.jsx'
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import Quizzing from "./quizzing.jsx";
import Takequiz from "./takequiz.jsx";
import Makequiz from "./makequiz.jsx";
const Linking=()=>{
  return(
     <div>
      <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<App/>} /> 
      <Route path="/login" element={<Login/>} /> 
      <Route path="/signup" element={<Signup/>} /> 
      <Route path="/quizzing" element={<Quizzing/>} /> 
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/features" element={<Features />}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/takequiz" element={<Takequiz/>} /> 
          <Route path="/makequiz" element={<Makequiz/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
     </div>
    )
 }
 export default Linking;
  