import React, { Component } from 'react';


class Names extends Component {
    constructor() {
        super();
        this.state = {
          error: null,
          isLoaded: false,
          name:null,
          img: '',
          id: null,
        };
        
      }
    
      componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/3/`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            name: result.name,
            id: result.id,
            img: result.sprites.front_default
            
          });
          console.log(this.state.img)
        
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
     
  }
  
  
  
      render() {
        return(
          
            <div key={this.state.id}>
              
              
              <h3>{this.state.name}</h3>
              <img src={this.state.img} />
              

            </div>
         
            
        )
          
      }
        
}



export default Names;