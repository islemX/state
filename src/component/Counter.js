import React, { Component } from 'react'

export class Counter extends Component {
    state={
        count:0,
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          count:this.state.count + 1,
        });
      }
      
      reset =() => {
        this.setState({count: this.state.count = 0})
      }

      render() {
        return (
          <div style={{ justifyContent: 'center',
            alignItems: 'center', }}>
            <h1> COUNTER : {this.state.count}</h1>
          <div>
            <button onClick={this.reset} style={{width:100, backgroundColor:'black'}}><span style={{color:'white'}}>RESET</span> </button>
          </div>
          </div>


        )
      }
}

export default Counter