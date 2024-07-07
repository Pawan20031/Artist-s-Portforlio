import React from 'react'
import pic from "../assests/yyy.jpg"
import { AiFillGithub, AiFillFacebook, AiFillTwitterSquare, AiOutlineArrowUp } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer id='footer'>
        <div>
            <img src={pic} alt="Founder" />
            <h2>Mukesh Kumar</h2>
            <p>Motivation is temporary, But discipline last forever.</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.linkedin.com/in/pawan-kumar-6584b322a" target='blank'>
                    <AiFillTwitterSquare/>
                </a>
                <a href="https://www.facebook.com/mukesh.jaikishan" target='blank'>
                    <AiFillFacebook/>
                </a>
                <a href="https://github.com/Pawan20031" target='blank'>
                    <AiFillGithub/>
                </a>
            </article>
        </aside>
        <a href="#home">
            <AiOutlineArrowUp/>
        </a>
        <section className="right">
            <p>Copyright &#169; 2023 All rights reserved </p>
        </section>
    </footer>
  )
}

export default Footer
