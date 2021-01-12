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
                <div className="modal-wrap">
                    <div className='modal-inner'>
                        <div className='modal-head'>
                            <h4>{this.props.name}</h4>
                        <div
                            className='modal-close-btn'
                            onClick={() => this.handleClose()}
                        ></div>
                        </div>
                        
                        <div className='modal-image'>
                            <img src={this.props.source} alt="" width="100%"/>
                        </div>
                        <div className="modal-foot"></div>
                    </div>
                </div>
            </div>                
            );
        }

        return (
            <Fragment>
            <div className="col-xl-4 col-md-10 col-sm-10 col-xs-10 justify-items-center img-center container-card" onClick={()=>this.handleClick()} data-aos="fade-up" data-aos-duration="1000">
                <img src={this.props.thumb} className="card-port" alt="portofolio" width="100%"/>
            </div>
            {modal}
            </Fragment>
        )
    }
}

Card.defaultProps = {
    seeMore: false
};
