
import React, { Component } from 'react';
import Profile from './component/Profile'
import './App.css';

class App extends Component {
    
    constructor( props ){
        super( props )
        this.state = { show : true };
        
        this.toggleDiv = this.toggleDiv.bind(this)
    }
    
    toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }
    
    render() {
        return (
          <div className='tg'>
           
            <div className="App-intro">
                <br />
                <button onClick={ this.toggleDiv }>Toggle</button>
                <br /><br />
                { this.state.show && <Box /> }
            </div>
          </div>
        );
    }
}

class Box extends Component{
    render(){
        return(
          <div className="App">
          <Profile fullname={'BENAMOR ISLEM'} bio={'WEB DEVELOPER'} profession={'Student'} /> </div>
        )
    }
}

export default App;