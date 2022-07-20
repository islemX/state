
import React, { Component } from 'react';
import Profile from './component/Profile'
import './App.css';
import Counter from './component/Counter';


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
          
           
           <div className='AP'>
           
          
               <br />
               <button className='BT' onClick={ this.toggleDiv }>Toggle</button>
               <br /><br />
               { this.state.show && <Box /> }
          
           
         </div>
            
          
        );
    }
}

class Box extends Component{
    render(){
      const handleName = fullname => alert(fullname)
      return (
        <div className='App'>
          <Profile fullname={'BENAMOR ISLEM'} bio={'WEB DEVELOPER'} profession={'Student'} handleName={handleName}/>
          
            <Counter/>
          
        </div>
     );
    }
}

export default App;