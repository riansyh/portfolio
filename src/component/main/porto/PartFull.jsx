import React, { Component } from 'react'
import Card from './Card'
import ui from './../../../galeri/Ui'
import desain from '../../../galeri/Desain'

export default class Partfull extends Component {
    render() {
        return (
            <div className="porto mb-6">
                <h2 className="title-portofolio">UI/UX Design</h2>
                <div className="cards row justify-content-center">
                    {ui.map((gal) => {
                        return <Card 
                        source={gal.img}
                        name={gal.judul}
                        />
                    })}
                </div>
                <h2 className="title-portofolio" id="red">Graphic Design</h2>      
                <div className="cards row justify-content-center">
                    {desain.map((desain) => {
                        return <Card 
                        source={desain.img}
                        name={desain.judul}
                        />
                    })}                    
                </div>                 
          
            </div>
        )
    }
}
