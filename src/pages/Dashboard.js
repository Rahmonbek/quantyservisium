import React, { Component } from 'react'
import style from '../css/Dashboard.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import Loader from './Loader.js'
export default class Dashboard extends Component {
    state={
        loader:true
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({loader:false})
        },5000)
    }
    render() {
        return (
            <div className={style.dash}>
                {this.state.loader?
               <Loader/>
                :
                <>
                <div>

                </div>
                </>}

            </div>
        )
    }
}
