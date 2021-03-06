import React, { Component } from 'react'
import SosmedUnit from './SosmedUnit'

export default class Sosmed extends Component {
    render() {
        return (
            <div className={this.props.kelas} data-aos="fade-left" data-aos-duration="500">
            <SosmedUnit
            classes="fa fa-dribbble"
            link="https://dribbble.com/riansyh"
            />
            
            <SosmedUnit
            classes="fa fa-instagram"
            link="https://www.instagram.com/rian.fbrsyh/"
            />            

            <SosmedUnit
            classes="fa fa-linkedin"
            link="https://www.linkedin.com/in/rian-febriansyah-a23699183/"
            />            

            <SosmedUnit
            classes="fa fa-github"
            link="https://github.com/riansyh/"
            />  
            </div>
        )
    }
}

Sosmed.defaultProps = {
    kelas: "sosmed"
}