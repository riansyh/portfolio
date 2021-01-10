import React, { Component, Fragment } from 'react'
import Card from './Card'
import porto1 from './../../img/porto/bg-1.png'

export default class PartUI extends Component {
    render() {
        return (
            <Fragment>
                <h2 className="title-portofolio" id="red">UI/UX Design</h2>
                <div className="cards row">
                    <Card
                    source={porto1}
                    />
                    <Card
                    source={porto1}
                    />
                    <Card
                    source={porto1}
                    />                                             
                </div>
            </Fragment>
        )
    }
}
