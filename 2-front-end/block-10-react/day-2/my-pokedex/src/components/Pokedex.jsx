import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return(
      <div className="flex justify-center flex-wrap p-2 my-4 ml-20 mr-20">
        { pokemons.map(pokemon => <Pokemon key={ pokemon.id } pokemon={ pokemon } />)}
      </div>
    )
  }
}

export default Pokedex;