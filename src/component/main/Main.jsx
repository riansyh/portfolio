import React, { Component, Fragment } from 'react'
import About from './about/About'
import Portfolio from './porto/Portfolio'
import Skill from './skill/Skills'

export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <Portfolio/>
                </div>
                <About/>
                <Skill/>
            </Fragment>
        )
    }
}
