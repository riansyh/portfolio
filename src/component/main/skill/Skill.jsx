import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
        <div className="col-4 skill-unit">
            <img src={this.props.gambar} className="imskill" alt="skill-icon"/>    
        </div>       
        )
    }
}
