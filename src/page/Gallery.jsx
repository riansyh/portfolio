import React, { Component, Fragment } from 'react'
import BackButton from '../component/BackButton';
import Partfull from '../component/main/porto/PartFull'
import download from './../svg/Download.svg'

export default class Gallery extends Component {
    componentDidMount(){
        const loading = document.getElementById('loading-cont');
        const ld = document.getElementById('loading');
        if(loading){
            ld.classList.add('available')
            setTimeout(() => {
            loading.outerHTML = '';
            }, 300)
        }
    }

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
                            Oke this is my gallery but this just a little piece of my whole design.
                        </p>
                        <div className="col-xl d-flex align-items-center justify-content-center">
                            <a className="button outline mt-0 mb-2" href="https://drive.google.com/file/d/15zpY81q2O9LZ0gX_h3xJDo45X7s4nQhQ/view?usp=sharing">
                                <img src={download} alt="download-icon" className="icon"/>
                                Download Portfolio
                            </a>                    
                        </div>
                        <Partfull/>
                    </div>                    
                </Fragment>
            </div>
        )
    }
}
