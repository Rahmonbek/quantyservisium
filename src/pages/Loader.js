import React, { Component } from 'react'
import style from "../css/loader.module.css"
import logo from '../img/logo.png'
import plane from '../img/plane.png'
export default class Loader extends Component {
    render() {
        return (
            <div>
                 <div className={style.loader}>
                   <div className={style.plane}>
                   <img className={style.planeleft} src={plane} alt="..."/>

                       <img className={style.logo} src={logo}  alt="..."/>
                       <img className={style.planeright} src={plane}  alt="..."/>
                   </div>
                </div>
            </div>
        )
    }
}
