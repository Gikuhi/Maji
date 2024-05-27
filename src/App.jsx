import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import B_39vw from './components/B_39vw.jsx';
import B_95vpw from './components/B_95vpw.jsx';
import Beco_x from './components/Beco_x.jsx';
import Beco_y from './components/Beco_y.jsx';
import Bulk_meter_reading from './components/Bulk_meter_reading.jsx';
import Case_Study from './components/Case_Study.jsx';
import Contact from './components/Contact.jsx';
import Cost_efficiency_metering from './components/Cost_efficiency_metering.jsx';
import Partners from './components/Partners.jsx'
import Portal from './components/Portal.jsx';
import Prepayment_metering from './components/Prepayment_metering.jsx';
import Products from './components/Products.jsx';
import Shengda_ultrasonic from './components/Shengda_ultrasonic.jsx';
import Solutions from './components/Solutions.jsx';
import Wired_remote_reading from './components/Wired_remote_reading.jsx';
import Wireless_remote_reading from './components/Wireless_remote_reading.jsx';

function App(){

  return(
    <>
      <Router>
      <Routes>
      <Route path = "/"  element = {<Home/>} />
      <Route path = "/about"  element = {<About/>} />
      <Route path = "/b_39vw"  element = {<B_39vw/>} />
      <Route path = "/b_95vpw"  element = {<B_95vpw/>} />
      <Route path = "/beco_x"  element = {<Beco_x/>} />
      <Route path = "/beco_y"  element = {<Beco_y/>} />
      <Route path ="/bulk_meter_reading" element={<Bulk_meter_reading/>} />
      <Route path = "/case_study"  element = {<Case_Study/>} /> 
      <Route path = "/contact"  element = {<Contact/>} />
      <Route path = "/cost_efficiency"  element = {<Cost_efficiency_metering/>} />
      <Route path = "/partners"  element = {<Partners/>} />
      <Route path= "/portal" element = {<Portal/>} />
      <Route path = "/prepayment_metering" element = {<Prepayment_metering/>} />
      <Route path = "/products"  element = {<Products/>} />
      <Route path = "/shengda_ultrasonic"  element = {<Shengda_ultrasonic/>} />
      <Route path = "/solutions"  element = {<Solutions/>} />
      <Route path = "/wired_remote_reading"  element = {<Wired_remote_reading/>} />
      <Route path = "/wireless_remote_reading"  element = {<Wireless_remote_reading/>} />






      </Routes>
      </Router>
    </>
  )
}

export default App