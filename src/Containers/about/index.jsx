import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../../Components/pageHeaderContent';
import { Animate } from "react-simple-animate";
import "./styles.scss"


const personalDetails = [
    {
        label: "Name",
        value: "Aniket Nagrale",
    },
    {
        label: "Address",
        value: "Netaji Nagar, Bhadrawati, Chandrapur, Maharashtra",
    },
    {
        label: "Email",
        value: "aniketnagrale999@gmail.com",
    },
    {
        label: "Contact No",
        value: "+91 7219852501",
    },
];

const jobSummary = `Self-motivated and hardworking fresher seeking for an
opportunity to work in a challenging environment to
prove my skills and utilize my knowledge and intelligence in the growth of the organization.
As a web development enthusiast with good knowledge,
I am passionate about creating dynamic and interactive
websites that meet user needs. With a strong foundation
in HTML, CSS, JavaScript and ReactJS.`

const About = () => {
    return (
        <>
            <section id='about' className='about'>
                <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
            </section>

            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>


                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>:
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>


                {/* <div className="about__content__servicesWrapper">services wrapper</div> */}


            </div>
        </>
    )
}

export default About
