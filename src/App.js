import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import { HeaderPhone } from "./components/Header";

function App() {
  const [menuOpen ,setMenuOpen]=useState(false);
  const [ratio,setRatio]=useState(window.innerWidth/window.innerHeight);
  useEffect(() => {
    const reesizeRatio=()=>{
      setRatio(window.innerWidth/window.innerHeight);
    };
    window.addEventListener("resize",reesizeRatio);
    
  
    return () => {
      window.removeEventListener("resize",reesizeRatio);
    }
  }, [ratio])
  

  return ratio<2? (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      <Gallery/>
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ):(
    <em id="customMessage">Please Change the ratio of View!</em>
  
  );
}

export default App;
