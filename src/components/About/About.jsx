import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'



const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-info">
                <div className="about-p">
                    <p>I still learn and want to take more experience to be a expert programmer</p>
                    <p>Like to Learn, Coding, Watch, Playing video games, Sleep :-D</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width: "75%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Python</p><hr style={{width: "45%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Tensorflow</p><hr style={{width: "25%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Java</p><hr style={{width: "25%"}} />
                    </div>
                    <div className="about-skill">
                        <p>PHP</p><hr style={{width: "75%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Laravel</p><hr style={{width: "85%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p><hr style={{width: "60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React Js</p><hr style={{width: "20%"}} />
                    </div>
                    <div className="about-skill">
                        <p>C++</p><hr style={{width: "15%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-languages">
            <div className="about-language">
                <h1>PHP</h1>
            </div>
            <hr />
            <div className="about-language">
                <h1>Python</h1>
            </div>
            <hr />
            <div className="about-language">
                <h1>Javascript</h1>
            </div>
            <hr />
            <div className="about-language">
                <h1>Java</h1>
            </div>
            <hr />
            <div className="about-language">
                <h1>C++</h1>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About