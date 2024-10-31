import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a passionate developer dedicated to building intuitive, efficient, and user-friendly web applications. My focus is on creating clean, maintainable code and leveraging modern technologies to enhance user experiences.</p>
                        <p>Currently, I'm expanding my skills in frontend and backend development, with hands-on experience in HTML, CSS, JavaScript, and React. My goal is to design solutions that are not only functional but also visually engaging and scalable.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "55%" }} /></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Node JS</p> <hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Express JS</p> <hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Fresher</h1>
                    <p>Actively learning and building foundational skills</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>BASIC PROJECTS COMPLETED IN FRONTEND DEVELOPMENT</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Studying</h1>
                    <p>Data Structures and Algorithms in C++</p>
                </div>
            </div>

        </div>
    )
}

export default About