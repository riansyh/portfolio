import React, { Component } from 'react'
import rian from "./../../img/ava.png"
import download from "./../../svg/Download.svg"

export default class Bio extends Component {
    render() {
        return (
            <div className="container">
                <div className="about">
                    <div className="row">
                        <div className="about1 col-xl-3 d-flex justify-content-end">
                            <div className="about2">
                                <div className="row">
                                    <div className="col d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                                        <a href="mailto:rianfebriansyah22@gmail.com" target="blank" class="button btn-white d-flex align-items-center">
                                        Contact Me!</a>                                        
                                    </div>
                                </div>
                                <div className="profile">
                                    <img src={rian} alt="" className="foto-rian"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <h2 className="nama">
                                Rian Febriansyah
                            </h2>
                            <div className="badge-container">
                            <div className="badge-rf">Graphic Designer</div>
                            <div className="badge-rf">Front End Dev.</div>
                            </div>
                        </div>
                        <div className="col-xl d-flex align-items-center justify-content-end">
                            <a className="button outline" href="https://drive.google.com/file/d/197E9oRIRasFXVoganxEPD5Uxzav-ReEs/view?usp=sharing">
                                 <img src={download} alt="download-icon" className="icon"/>
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
