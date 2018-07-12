import React from 'react';

class Input extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.getPokemonName} onKeyDown={this.props.deletePokemon}>
                <input type="search" name="pokemon" placeholder="Write Pokemon Number" />
                <button >Submit</button>
            </form>
        );
    }
}
export default Input;