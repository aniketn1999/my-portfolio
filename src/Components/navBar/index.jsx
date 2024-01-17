import React, { useState } from 'react'
import { FaReact, FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import "./styles.scss"


const data = [
    {
        label: "HOME",
        to: "/my-portfolio/"
    },
    {
        label: "ABOUT ME",
        to: "/my-portfolio/about"
    },
    {
        label: "SKILLS",
        to: "/my-portfolio/skills"
    },
    {
        label: "RESUME",
        to: "/my-portfolio/resume"
    },
    {
        label: "PORTFOLIO",
        to: "/my-portfolio/portfolio"
    }
    
]

const NavBar = () => {

    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    return (
        <div >
            <nav className="navbar">
                <div className="navbar__container">

                    <Link to={"/my-portfolio/"} className='navbar__container__logo'>
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ''} `}>
                    {data.map((item, key) => {
                        return (
                            <li key={key} className='navbar__container__menu__item'>
                                <Link className='navbar__container__menu__item__links' to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                    
                </div>

            </nav>
        </div>
    )
}

export default NavBar
