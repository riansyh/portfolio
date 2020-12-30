import React, { Component } from 'react'

export default class Sosmed extends Component {
    render() {
        return (
            <div className="sosmed">
                <a href={this.props.link}
                target="_blank"
                rel="noreferrer"
                class={this.props.classes}
              ></a>
            </div>
        )
    }
}
