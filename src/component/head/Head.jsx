import React, { Component } from 'react'
import Bio from './Bio'
import Hero from './Hero'

export default class Head extends Component {
    render() {
        return (
            <section>
                <Hero/>
                <Bio/>
            </section>
        )
    }
}
