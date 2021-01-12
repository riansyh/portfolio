import React, { Component } from 'react'
import logo from './../../../svg/Logo'

export default class About extends Component {
    render() {
        return (
            <div className="about-me">
                <div className="container" data-aos="fade-right" data-aos-duration="1000">
                    <div className="row">
                        <div className="col-xl-4 judul">
                            <img src={logo.user} alt="user-icon" className="me"/>
                            <h2>
                                About me
                            </h2>
                        </div>    
                        <div className="col-xl-8">
                            <p className="desc">
                                Hello, my name is Rian Febriansyah, I am a Computer Science Student at Padjadjaran University, I love graphic design, UI/UX design, and front-end web development. I have 5 years of experience in graphic design. I also like solving the problem and implement the idea with design.
                            </p>                   
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
