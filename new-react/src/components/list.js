import React from 'react';

class List extends React.Component {
    render(){
        return(
            <div id="pokemon">
                {this.props.name && <h3>Pokemon Name: {this.props.name.toUpperCase()}</h3>}
                <img src={this.props.imgurl}/>
                {this.props.weight && <p>Pokemon Weight : {this.props.weight} kg</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}
export default List;