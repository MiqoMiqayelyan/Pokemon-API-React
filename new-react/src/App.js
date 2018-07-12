import React, { Component } from 'react';
import './App.css';
import Input from './components/input';
import List from './components/list';
import './App.css';



class App extends Component {
    constructor() {
        super();
        this.state = {
          error: null,
          isLoaded: false,
          name: undefined,
          img: undefined,
          weight: undefined,
          
        };
        this.getPokemonName = this.getPokemonName.bind(this);
        this.deletePokemon = this.deletePokemon.bind(this);
        
      }
    
    getPokemonName(e) {
          e.preventDefault(); //Fix auto-update error
          const number = e.target.elements.pokemon.value; //Connect the Input
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            name: result.name,
            img: result.sprites.front_default,
            weight: result.weight
            
          });
          console.log(this.state.img)
        
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: 'Please Write Pokemon Number'
          });
        }
      )
     
    }
    deletePokemon(){
        this.setState({
            error: null,
          isLoaded: false,
          name: undefined,
          img: undefined,
          weight: undefined,
        })
    }
  
      
    render() {
        return ( 
            <div id="content">
               <Input getPokemonName={this.getPokemonName}
                      deletePokemon={this.deletePokemon}
               />
               <List 
                    name={this.state.name}
                    imgurl={this.state.img}
                    weight={this.state.weight}
                    error={this.state.error}
               />
               
            </div>
        );
    }
}

export default App;