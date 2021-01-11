import React, { Component } from 'react'
import logo from './../../../svg/Logo'

export default class About extends Component {
    render() {
        return (
            <div className="about-me">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 judul">
                            <img src={logo.user} alt="user-icon" className="me"/>
                            <h2>
                                About me
                            </h2>
                        </div>    
                        <div className="col-xl-8">
                            <p className="desc">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa odit sequi a quo dolore ea voluptatibus aperiam voluptates ad architecto unde repudiandae fuga magnam possimus sint, molestias eos est veritatis!
                            </p>                   
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
