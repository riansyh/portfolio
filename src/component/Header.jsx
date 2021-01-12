import React, { Component } from 'react'
import Profil from './Profil'
import SosmedCont from './SosmedCont'

export default class Header extends Component {
    render() {
        return (
            <div>
            <Profil/>
            <SosmedCont/>
            <h2 className="font-bold text-3xl lg:text-4xl text-center text-gray-800">Rian Febriansyah</h2>
            <p className="lg:text-xl text-lg text-center mb-8 text-gray-600">Graphic Designer</p>
            </div>
        )
    }
}
