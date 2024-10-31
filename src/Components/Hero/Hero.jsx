import React from 'react'
import './Hero.css'
import profile_img from '../../assets/sanjeev_profile.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="Profile" />
        <h1>Hi, <span>I'm Sanjeev Singh,</span> aspiring frontend developer</h1>
        <p>I'm passionate about learning web development and building engaging, user-friendly interfaces.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
