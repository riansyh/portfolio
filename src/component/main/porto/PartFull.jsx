import React, { Component } from 'react'
import Card from './Card'
import ui from './../../../galeri/Ui'
import desain from '../../../galeri/Desain'

export default class Partfull extends Component {
    render() {
        return (
            <div className="porto mb-6 porto-gal" >
                <h2 className="title-portofolio" data-aos="fade-up" data-aos-duration="1000">UI/UX Design</h2>
                <div className="cards row justify-content-center">
                    {ui.map((gal) => {
                        return <Card 
                        source={gal.img}
                        name={gal.judul}
                        thumb={gal.thumb}
                        />
                    })}
                </div>
                <h2 className="title-portofolio" id="red" data-aos="fade-up" data-aos-duration="1000" >Graphic Design</h2>      
                <div className="cards row justify-content-center">
                    {desain.map((desain) => {
                        return <Card 
                        source={desain.img}
                        name={desain.judul}
                        thumb={desain.thumb}
                        />
                    })}                    
                </div>                 
          
            </div>
        )
    }
}
