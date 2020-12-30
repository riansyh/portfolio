import React, { Component } from 'react'
import Sosmed from './Sosmed'

export default class SosmedCont extends Component {
    render() {
        return (
            <div className="flex mx-auto cntr">
            <Sosmed
            classes="fa fa-facebook"
            link="https://facebook.com/yanz.dheractionz"
            />
            
            <Sosmed
            classes="fa fa-instagram"
            link="https://www.instagram.com/rian.fbrsyh/"
            />            

            <Sosmed
            classes="fa fa-linkedin"
            link="https://www.linkedin.com/in/rian-febriansyah-a23699183/"
            />            

            <Sosmed
            classes="fa fa-github"
            link="https://github.com/riansyh/"
            />            
            </div>
        )
    }
}
