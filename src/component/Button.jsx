import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div className="m-6 self-center">
                <a className="mx-auto rehn-light shadow-lg button font-semibold hover:shadow-sm transition-shadow duration-300 ease-in-out" href={this.props.link}>
                    {this.props.name}
                </a>
            </div>
        )
    }
}
