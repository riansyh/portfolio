import React, { Component } from 'react'
import logo from './../../../svg/Logo'
import Skill from './Skill'

export default class Skills extends Component {
    render() {
        return (
            <div className="skill container">
                <div className="skill-tool">
                    <div className=" row rocket justify-content-center">
                        <img src={logo.rocket} alt="rocket-icon" className="rocket"/>
                    </div>
                    <div className="row justify-content-center">
                        <h2> <span className="red">Tools</span> and <span className="blue">Skills</span></h2>
                    </div>
                    <div className="row desc-tool">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, tempore? Modi facere possimus suscipit sapiente delectus necessitatibus. Rem perspiciatis eligendi reprehenderit sequi non incidunt ullam quibusdam, minima quae. Excepturi, ipsum?
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
