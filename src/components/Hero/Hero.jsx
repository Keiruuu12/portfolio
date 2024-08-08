import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1>Hello, <span>I'm Dafa Gemilang</span>, who want to be a good programmer</h1>
        <p>Playing Video Games, Coding, Learn, Sleep..</p>
        <div className="hero-action">
            <div className="hero-message"><AnchorLink className='anchor-link' offset={50} href='#contact'>Send Message</AnchorLink></div>
            <div className="hero-cv">My CV</div>
        </div>
    </div>
  )
}

export default Hero