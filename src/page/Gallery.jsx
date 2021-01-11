import React, { Component, Fragment } from 'react'
import BackButton from '../component/BackButton';
import Partfull from '../component/main/porto/PartFull'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <div className="head-gallery">
                        <h1>Welcome To My Gallery</h1>
                        <BackButton/>
                    </div>
                    <div className="container">
                        <p className="about-gallery my-4 mx-auto">
                            Oke this is my gallery
                        </p>
                        <div className="col-xl d-flex align-items-center justify-content-center">
                            <a className="button outline mx-auto" href="https://drive.google.com/file/d/197E9oRIRasFXVoganxEPD5Uxzav-ReEs/view?usp=sharing">
                                Download My Portfolio
                            </a>                    
                        </div>
                        <Partfull/>
                    </div>                    
                </Fragment>
            </div>
        )
    }
}
