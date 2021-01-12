import React, { Component, Fragment } from 'react'
import Card from './Card'
import ui from './../../../galeri/Ui'
import desain from './../../../galeri/Desain'
import thumb from './../../../galeri/thumb/thumb'
import SeeMore from './SeeMore'

export default class Part extends Component {
    render() {
        return (
            <Fragment>
                <div className="cards row justify-content-center">
                    <Card
                    thumb={thumb[7]}
                    source={desain[0].img}
                    name="Poster Covid-19"
                    />
                    <Card
                    thumb={thumb[11]}
                    source={desain[5].img}
                    name="Jaket Himatif"
                    />
                    <Card
                    thumb={thumb[14]}
                    source={ui[0].img}
                    name="Music Player App"
                    />
                    <Card
                    thumb={thumb[15]}
                    source={ui[1].img}
                    name="Redesign BimaPlus"
                    />
                    <Card
                    thumb={thumb[16]}
                    source={ui[2].img}
                    name="Wonderful Majalengka"
                    />         
                    <SeeMore />
                </div>
            </Fragment>
        )
    }
}
