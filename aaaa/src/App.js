import React , { Component } from 'react';
import './App.css';
import Wrapper from './Components/Wrapper/Wrapper';
import Text from './Components/Text/Text';
import Card from './Components/Card/Card';
import classes from './Components/Global.module.css'

class App extends Component{
 constructor(props){
 super(props)
 this.state = {
  timer: ``
 }

 }
 componentDidMount(){
  this.setState({
    timer: new Date().toLocaleTimeString()
   })
 }

 // oops
 componentDidUpdate(){
  this.timeout =  setTimeout(()=>{
    this.setState({
      timer: new Date().toLocaleTimeString()
    })
  },1000)
 
 }
componentWillUnmount(){
    clearInterval(this.timeout)
  }


 render(){
  return(
    <Wrapper>
      <Card className={classes.mytimebox}>
      <Text className={classes.mytime}>{this.state.timer}</Text>
      </Card>
    </Wrapper>
  )
 }
}

export default App