import React from 'react'
import { useNavigate } from "react-router-dom"
import "./styles.scss"
import { Animate } from "react-simple-animate"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";



const Home = () => {

  const navigate = useNavigate()

  const handleNavigateToContactMePage = () => {
    navigate("/contact")
  }

  return (

    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Aniket
          <br />
          Front end developer
        </h1>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          < FaGithub size={40} className='btn' />
          <FaLinkedin size={40} className='btn'/>
          <FaInstagram size={40} className='btn'/>
        </div>
      </Animate>

    </section>

  )
}

export default Home
