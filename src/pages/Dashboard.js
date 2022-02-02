import React, { Component } from 'react'
import style from '../css/Dashboard.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import Loader from './Loader.js'
import logo from '../img/logo.png'
import { Col, Container, Row } from 'react-bootstrap';
import { Button} from 'antd';
import axios from 'axios'
export default class Dashboard extends Component {
    state={
        loader:true,
        check:[true, false, false, false, false],
        btn:[true, false, false],
        number:5,
    tickets:null,
    tick:null,
    }
getTickets=()=>{
    axios.get('https://front-test.beta.aviasales.ru/search').then((res)=>{
       var id=res.data.searchId
    axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`).then(res1=>{
      

        this.setState({
            tickets:res1.data.tickets,loader:false,
            tick:res1.data.tickets
        })
        this.EditCheck()
    })
    })
}
echoTime=(time, dur)=>{
  var soat=Number(time.substr(0,2))
  var min=Number(time.substr(3, 2))
  var soat1=parseInt(dur/60)
  var min1=dur-(soat1*60)
  soat+=soat1
min+=min1

if(min>=60){
    soat+=1
    min-=60
}
  while(soat>=12){
      soat-=12
  }
  if(soat<10){
      soat="0"+soat
  }
  
  if(min<10){
    min="0"+min
}
var ti=`${time} - ${soat}:${min}`
  return(ti)

}
echoDur=(dur)=>{
    var soat1=parseInt(dur/60)
  var min1=dur-(soat1*60)
  var ti=`${soat1}ч ${min1}м`
  return(ti)
}
    addCard=()=>{
        this.setState({
            number:this.state.number+5
        })
    }
    EditCheck=(id)=>{
        var a=this.state.check
        a[id]=!a[id]
        this.setState({
            check:a,
        loader:true,
        })
        if((this.state.check[1] && this.state.check[2] && this.state.check[3] && this.state.check[4]) || (!this.state.check[1] && !this.state.check[2] && !this.state.check[3] && !this.state.check[4]) ){
            a=this.state.check
            a[0]=true
            this.setState({
                check:a,
           
            })
                
        }else{
            if(this.state.check[1] || this.state.check[2] || this.state.check[3] || this.state.check[4]){
                a=this.state.check
                a[0]=false
                this.setState({
                    check:a,
               
                })
            }
        }
        var ti=this.state.tick
        var g=[]
        if(!this.state.check[0]){
            
            if(this.state.check[1]){
         
                for(let i=0; i<ti.length; i++){
                 var f=true   
                 for(let j=0; j<ti[i].segments.length; j++){
                     if(ti[i].segments[j].stops.length!==0){
                         f=false
                     }
                 }
                 if(f){
                     g.push(ti[i])
                 }
                }
             }
           
             if(this.state.check[2]){
         
                for(let i=0; i<ti.length; i++){
                 var f=true   
                 for(let j=0; j<ti[i].segments.length; j++){
                     if(ti[i].segments[j].stops.length!==1){
                         f=false
                     }
                 }
                 if(f){
                     g.push(ti[i])
                 }
                }
             }
             if(this.state.check[3]){
         
                for(let i=0; i<ti.length; i++){
                 var f=true   
                 for(let j=0; j<ti[i].segments.length; j++){
                     if(ti[i].segments[j].stops.length!==2){
                         f=false
                     }
                 }
                 if(f){
                     g.push(ti[i])
                 }
                }
             }
             if(this.state.check[4]){
         
                for(let i=0; i<ti.length; i++){
                 var f=true   
                 for(let j=0; j<ti[i].segments.length; j++){
                     if(ti[i].segments[j].stops.length!==3){
                         f=false
                     }
                 }
                 if(f){
                     g.push(ti[i])
                 }
                }
             }
            
           
        }else{
            g=ti
        }

        if(this.state.btn[0]){
            g.sort((a,b)=> (a.price - b.price))
        }
        
        if(this.state.btn[1]){
            
          
        g.sort((a,b)=> (a.segments.reduce(function(sum, current) {
            return sum + current.duration;
          }, 0) - b.segments.reduce(function(sum, current) {
            return sum + current.duration;
          },0)))
    
        }
      
        this.setState({
            tickets:g,
            loader:false
        })
       

    }
 EditBtn=(id)=>{
     var a=this.state.btn
     a[0]=false
     a[1]=false
     a[2]=false
     a[id]=true
     this.setState({
         btn:a,
         loader:true,
     })
     var g=this.state.tickets
     if(this.state.btn[0]){
        g.sort((a,b)=> (a.price - b.price))
    }
    
    if(this.state.btn[1]){
      
        g.sort((a,b)=> (a.segments.reduce(function(sum, current) {
            return sum + current.duration;
          }, 0) - b.segments.reduce(function(sum, current) {
            return sum + current.duration;
          },0)))
    }
    this.setState({
        tickets:g,
        loader:false
    })
 }
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
      };
    
    componentDidMount(){
        this.getTickets()
       
       
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
            <li  onClick={()=>{this.EditCheck(0)}}>
            <input type="checkbox" id="chk1" name="chkdemo"  checked={this.state.check[0]}/><label for="chk1"></label> Все
            </li>
            <li  onClick={()=>{this.EditCheck(1)}}>
            <input type="checkbox" id="chk2" name="chkdemo"   checked={this.state.check[1]}/><label for="chk2"></label> Без пересадок
            </li>
            <li  onClick={()=>{this.EditCheck(2)}}>
            <input type="checkbox" id="chk3" name="chkdemo"   checked={this.state.check[2]}/><label for="chk3"></label> 1 пересадка
            </li>
            <li  onClick={()=>{this.EditCheck(3)}}>
            <input type="checkbox" id="chk4" name="chkdemo"   checked={this.state.check[3]}/><label for="chk4"></label> 2 пересадки
            </li>
            <li  onClick={()=>{this.EditCheck(4)}}>
            <input type="checkbox" id="chk5" name="chkdemo"   checked={this.state.check[4]}/><label for="chk5"></label> 3 пересадки
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
                {this.state.tickets!==null?this.state.tickets.slice(0, this.state.number).map(item=>{
                    return(<div className={style.cardT}>
                        <div className={style.cardHead}>
                <p>{item.price} Р </p>
                <img alt="..." src={`//pics.avs.io/99/36/${item.carrier}.png`}/>
                
                        </div>
                        <br/>
                        {item.segments.map((item1, key)=>{
                            return( <Row>
                    
                                <Col lg={4} md={4} sm={5} className={style.colT}>
                                        <p className={style.date}>{item1.origin} – {item1.destination}
                            </p>
                            <p className={style.clock}>
                            {this.echoTime(item1.date.substr(item1.date.indexOf("T")+1, 5), item1.duration)}
                          
                            </p>
                                    </Col>
                                    <Col lg={4} md={4} sm={5} className={style.colT}>
                                        <p className={style.date}>В пути
                            </p>
                            <p className={style.clock}>{this.echoDur(item1.duration)}</p>
                                    </Col>
                                    <Col lg={4} md={4} sm={5} className={style.colT}>
                                        <p className={style.date}>{item1.stops.length} пересадки
                            </p>
                            <p className={style.clock}>{item1.stops.length!==0?item1.stops.slice(0, item1.stops.length-1).map(item2=>{
                                return (item2+', ')
                            }):'-'}{item1.stops[item1.stops.length-1]}</p>
                                    </Col>
                            </Row>
                               )
                        })}
                    </div>
                //    {"price":73297,"carrier":"EY","segments":[{"origin":"MOW","destination":"HKT","date":"2022-02-12T01:42:00.000Z","stops":["DXB","AUH"],
                //    "duration":1093},
                //    {"origin":"HKT","destination":"MOW","date":"2022-03-04T05:27:00.000Z","stops":["AUH"],"duration":901}]},
                )
                }):''}
               
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
