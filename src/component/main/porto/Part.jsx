import React, { Component, Fragment } from 'react'
import Card from './Card'
import ui from './../../../galeri/Ui'
import desain from './../../../galeri/Desain'
import SeeMore from './SeeMore'

export default class Part extends Component {
    render() {
        return (
            <Fragment>
                {/* <h2 className="title-portofolio">Graphic Design</h2> */}
                <div className="cards row justify-content-center">
                    <Card
                    source={desain[0].img}
                    />
                    <Card
                    source={desain[5].img}
                    />
                    <Card
                    source={ui[0].img}
                    />
                    <Card
                    source={ui[1].img}
                    />
                    <Card
                    source={ui[2].img}
                    />         
                    <SeeMore/>
                </div>
            </Fragment>
        )
    }
}
