
import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show:'true'
        }
    }
    
    /*
    shouldComponentUpdate(){
        return false;

    }*/
/*changeColor=()=>{
    this.setState({color:'blue'})
}*/
/*
getSnapshotBeforeUpdate(prevProps,prevState){
    document.getElementById('d1').innerHTML='before  update'+prevState.color;
}
componentDidUpdate(){
    document.getElementById('d2').innerHTML='after  update'+this.state.color;

}
 componentDidMount()
 {
    this.setState({ color:'black'
     }) }*/
    render() {
        console.log('shabm');
        return (
        <div>
                <h1> color is:{this.state.color}</h1>
                <div id='d1'></div>
                <div id='d2'></div>
               
                </div>
           
        )
    
}}
export default Lifecycle