import React, { Component } from 'react'
import Sosmed from '../head/Sosmed'
import logo from './../../img/logo-rian.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-1 logo" data-aos="fade-right" data-aos-duration="1000">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="col-12 col-lg-4 copyright" data-aos="fade-right" data-aos-duration="1000">
                            <h3> <span className="bold">Rian</span> Febriansyah</h3>
                            <p className="as">Computer Science Student</p>
                            <p className="copy">© 2021 Rian Febriansyah.  All rights reserved.</p>
                        </div>
                        <div className="col-12 col-lg-7 justify-content-end sos-foot">
                            <Sosmed kelas="sosmed-foot"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
