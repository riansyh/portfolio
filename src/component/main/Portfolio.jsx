import React, { Component } from 'react'
import Part from './Part'
import PartUI from './PartUI'

export default class Portfolio extends Component {
    render() {
        return (
            <section className="porto">
                <Part/>
                <PartUI/>
            </section>
        )
    }
}
