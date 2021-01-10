import React, { Component, Fragment } from 'react'

export default class Card extends Component {
    state = {
        isModalOpen: false,
    }

    handleClick(){
        this.setState({
            isModalOpen: true
        })
    }

    handleClose(){
        this.setState({
            isModalOpen: false
        })
    }

    render() {
        let modal;

        if(this.state.isModalOpen){
            modal = (
            <div className='modal'>
            <div className='modal-inner'>
                <div className='modal-head'>
                    <h4>Nama APlikasi</h4>
                <button
                    className='modal-close-btn'
                    onClick={() => this.handleClose()}
                ></button>
                </div>
                
                <div className='modal-introduction'>
                    <img src={this.props.source} alt="" width="100%"/>
                </div>
            </div>
            </div>                
            );
        }

        return (
            <Fragment>
            <div className="col-xl-4 col-md-12 img-center" onClick={()=>this.handleClick()}>
                <img src={this.props.source} className="card-port" alt="portofolio" width="100%"/>
            </div>
            {modal}
            </Fragment>
        )
    }
}
