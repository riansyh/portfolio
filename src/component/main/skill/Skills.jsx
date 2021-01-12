import React, { Component } from 'react'
import logo from './../../../svg/Logo'
import Skill from './Skill'

export default class Skills extends Component {
    render() {
        return (
            <div className="skill container">
                <div className="skill-tool" data-aos="fade-up" data-aos-duration="1000">
                    <div className=" row rocket justify-content-center">
                        <img src={logo.rocket} alt="rocket-icon" className="rocket"/>
                    </div>
                    <div className="row justify-content-center">
                        <h2> <span className="red">Tools</span> and <span className="blue">Skills</span></h2>
                    </div>
                    <div className="row desc-tool">
                        <p>
                            Here, some tools that I use frequently and skills that I have learned. As time goes by, I will learn new things and scale up my skills. The other tools or skills that I have learned are Adobe Photoshop, Adobe After Effect, Bootstrap, C++, Python, PHP, and Java.
                        </p>
                    </div>
                    <div className="row tool-container justify-content-center">
                        <Skill gambar={logo.corel} />
                        <Skill gambar={logo.af} />
                        <Skill gambar={logo.figma} />
                        <Skill gambar={logo.ci} />
                        <Skill gambar={logo.js} />
                        <Skill gambar={logo.react} />
                    </div>
                </div>
            </div>
        )
    }
}
