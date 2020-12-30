import React, { Component } from 'react'
import Button from './Button'

export default class Foot extends Component {
    render() {
        return (
            <div className="bg-biru pb-20 lg:pb-8">
                <p className="text-center lg:px-72 p-8 lg:text-2xl text-xl text-gray-50">Undergraduate Computer Science student Padjadjaran University, creative and loyal person, interested in graphic design and front-end web development. </p>
                <div className="btn-container flex-row lg:flex">
                    <Button
                    name="CV"
                    link="https://drive.google.com/file/d/197E9oRIRasFXVoganxEPD5Uxzav-ReEs/view?usp=sharing"
                    />
                    <Button
                    name="Portfolio"
                    link="https://drive.google.com/file/d/15zpY81q2O9LZ0gX_h3xJDo45X7s4nQhQ/view?usp=sharing"
                    />
                </div>
            </div>
        )
    }
}
