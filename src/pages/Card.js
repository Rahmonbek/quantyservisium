import React, { Component } from 'react'
import air from '../img/air.png'
import style from '../css/Dashboard.module.css'
import Loader from './Loader.js'
import logo from '../img/logo.png'
import { Col, Container, Row } from 'react-bootstrap';
import { Button} from 'antd';

export default class Card extends Component {
    render() {
        return (
    
    <div className={style.cardT}>
        <div className={style.cardHead}>
<p>13 400 Р </p>
<img alt="..." src={air}/>

        </div>
        <br/>
    <Row>
    <Col lg={4} md={4} sm={5} className={style.colT}>
            <p className={style.date}>MOW – HKT
</p>
<p className={style.clock}>10:45 – 08:00</p>
        </Col>
        <Col lg={4} md={4} sm={5} className={style.colT}>
            <p className={style.date}>В пути
</p>
<p className={style.clock}>21ч 15м</p>
        </Col>
        <Col lg={4} md={4} sm={5} className={style.colT}>
            <p className={style.date}>2 пересадки
</p>
<p className={style.clock}>HKG, JNB</p>
        </Col>

        <Col lg={4} md={4} sm={5} className={style.colT}>
            <p className={style.date}>MOW – HKT
</p>
<p className={style.clock}>11:20 – 00:50</p>
        </Col>

        <Col lg={4} md={4} sm={5} className={style.colT}>
            <p className={style.date}>В пути
</p>
<p className={style.clock}>13ч 30м</p>
        </Col>

        <Col lg={4} md={4} sm={5} className={style.colT}>
            <p className={style.date}>1 пересадка
</p>
<p className={style.clock}>HKG</p>
        </Col>

    </Row>
    </div>
   
       
        )
    }
}
