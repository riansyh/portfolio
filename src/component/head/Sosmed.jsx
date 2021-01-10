import React, { Component } from 'react'
import SosmedUnit from './SosmedUnit'

export default class Sosmed extends Component {
    render() {
        return (
            <div className="sosmed">
            <SosmedUnit
            classes="fa fa-facebook"
            link="https://facebook.com/yanz.dheractionz"
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
