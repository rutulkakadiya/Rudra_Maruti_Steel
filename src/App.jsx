import React, { useEffect } from 'react';
import Home from './Components/Home/Home';
import CompanyProfile from './Components/Company Profile/CompanyProfile';
import Products from './Components/Products/Products';
import Gallery from './Components/Gallery/Gallery';
import EBrochure from './Components/E-Brochure/EBrochure';
import ContactUs from './Components/Contact Us/ContactUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackgroundLayer from './Common Components/BackgroundLayer';
import ScrollToTop from './Common Components/ScrollToTop';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import DetailProducts from './Components/Products/DetailProducts';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="relative min-h-screen bg-transparent">
      {/* <BackgroundLayer /> */}
      <div className="relative z-10">
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/companyProfile' element={<CompanyProfile />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/detailedProduct' element={<DetailProducts />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/ebrochure' element={<EBrochure />}></Route>
          <Route path='/contactUs' element={<ContactUs />}></Route>
          
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
