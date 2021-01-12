import React, { Component } from 'react'

export default class SosmedUnit extends Component {
    render() {
        return (
            <div className="sosmed-unit">
                <a href={this.props.link}
                target="_blank"
                rel="noreferrer"
                class={this.props.classes}
              ></a>
            </div>
        )
    }
}
