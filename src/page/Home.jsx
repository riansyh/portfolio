import React, { Component } from 'react'
import Head from '../component/head/Head'
import Main from '../component/main/Main'

export default class Home extends Component {
    
    componentDidMount(){
        const loading = document.getElementById('loading-cont');
        const ld = document.getElementById('loading');
        if(loading){
            ld.classList.add('available')
            setTimeout(() => {
            loading.outerHTML = '';
            }, 1000)
        }
    }

    render() {
        return (
            <div>
                <Head/>
                <Main />
            </div>
        )
    }
}
