import React, { Component } from 'react'
import style from '../css/Dashboard.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import Loader from './Loader.js'
import Card from './Card.js'
import logo from '../img/logo.png'
import { Col, Container, Row } from 'react-bootstrap';
import { Button} from 'antd';

export default class Dashboard extends Component {
    state={
        loader:true,
        check:[false, true, true, true, false],
        btn:[true, false, false],
        number:[0, 0, 0, 0, 0]
    }
    addCard=()=>{
        this.setState({
            number:this.state.number.concat(this.state.number)
        })
    }
    EditCheck=(id)=>{
        var a=this.state.check
        a[id]=!a[id]
        this.setState({
            check:a
        })

    }
 EditBtn=(id)=>{
     var a=this.state.btn
     a[0]=false
     a[1]=false
     a[2]=false
     a[id]=true
     this.setState({
         btn:a
     })
 }
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
      };
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({loader:false})
        },7000)
    }
    render() {
        return (
            <div className={style.dash}>
                {this.state.loader?
               <Loader/>
                :
                <>
                <div>
                    <Container>
<div className={style.logo}>
    <img src={logo} alt="..."/>
</div>

<Row>
<Col lg={3} style={{padding:'20px'}}>
    <div className={style.check}>
        <p>Количество пересадок</p>
        <ul>
        <li>
            <input type="checkbox" id="chk1" name="chkdemo" onChange={()=>{this.EditCheck(0)}}  checked={this.state.check[0]}/><label for="chk1"></label> Все
            </li>
            <li>
            <input type="checkbox" id="chk2" name="chkdemo"  onChange={()=>{this.EditCheck(1)}}  checked={this.state.check[1]}/><label for="chk2"></label> Без пересадок
            </li>
            <li>
            <input type="checkbox" id="chk3" name="chkdemo"  onChange={()=>{this.EditCheck(2)}}  checked={this.state.check[2]}/><label for="chk3"></label> 1 пересадка
            </li>
            <li>
            <input type="checkbox" id="chk4" name="chkdemo"  onChange={()=>{this.EditCheck(3)}}  checked={this.state.check[3]}/><label for="chk4"></label> 2 пересадки
            </li>
            <li>
            <input type="checkbox" id="chk5" name="chkdemo"  onChange={()=>{this.EditCheck(4)}}  checked={this.state.check[4]}/><label for="chk5"></label> 3 пересадки
            </li>

        </ul>
   
    </div>
</Col>
    <Col lg={9} style={{padding:'20px'}}>
    <div className={style.butGroup}>
                
                <Button onClick={()=>{this.EditBtn(0)}} type={this.state.btn[0]?"primary":''} className={style.but}>Самый дешевый
             
             </Button>
                <Button onClick={()=>{this.EditBtn(1)}} type={this.state.btn[1]?"primary":''} className={style.but}>Самый быстрый</Button>
                <Button onClick={()=>{this.EditBtn(2)}} type={this.state.btn[2]?"primary":''} className={style.but}>Оптимальный</Button>
                </div>
                {this.state.number.map(item=>{
                    return(<Card/>)
                })}
               
               <Button type="primary" onClick={this.addCard} className={style.butBig}>Показать еще 5 билетов!</Button>
    
    </Col>
    
</Row>
</Container>
                </div>
                </>}

            </div>
        )
    }
}
