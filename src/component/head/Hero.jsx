import React, { Component } from 'react'
import logo from './../../img/logo-white.png'
import Sosmed from './Sosmed'

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="container position-relative">
                    <div className="row">
                        <img src={logo} alt="logo-white" className="logo mx-auto mb-3"/>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <h1 className="hero-name">riansyh</h1>
                            <p className="sub-title">Welcome to my portfolio wesbite!</p>
                        </div>
                    </div>
                    <Sosmed/>
                </div>
            </div>
        )
    }
}
