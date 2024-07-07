import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

const Header = ({setMenuOpen,menuOpen}) => {
  return (
    <>
    <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
    </nav>
    <button className="navBtn" onClick={()=>setMenuOpen(!menuOpen)}>
      <AiOutlineMenu/>
    </button></>
  );
};

export const HeaderPhone=({menuOpen,setMenuOpen})=>{
  return(
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  );
}

export const NavContent=({setMenuOpen})=>(
    <>
    <h2>MukeshKumar.</h2>
    <div>
        <a href='#home' onClick={()=>setMenuOpen(false)}>Home</a>
        <a href='#work' onClick={()=>setMenuOpen(false)}>Work</a>
        <a href='#timeline' onClick={()=>setMenuOpen(false)}>Timeline</a>
        <a href='#services' onClick={()=>setMenuOpen(false)}>Services</a>
        <a href='#testimonial' onClick={()=>setMenuOpen(false)}>Testimonial</a>
        <a href='#contact' onClick={()=>setMenuOpen(false)}>Contact</a>
    </div>
    <a href="mailto:Jaikishanmukesh@gmail.com">
        <button>Email</button>
    </a>
    </>
)
export default Header
