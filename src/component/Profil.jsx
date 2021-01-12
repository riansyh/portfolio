import avatar from "./../img/ava.png";
import React, { Component } from 'react'

export default class Profil extends Component {
    render() {
        return (
            <div className="lg:w-52 lg:h-52 w-40 h-40 bg-blue-400 mx-auto mt-10 rounded-full hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <img src={avatar} alt="logo"/>
            </div>
        )
    }
}
