import React from 'react';
import Pokemon from './Pokemon';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonTypes: [],
      filteredType: 'all',
      pokemonIndex: 0,
    };
    this.fetchPokemonTypes = this.fetchPokemonTypes.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
    this.onFilterPokemons = this.onFilterPokemons.bind(this)
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  componentDidMount() {
    this.fetchPokemonTypes();
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;
    this.setState({
      pokemonTypes: [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))],
    });
  }

  onFilterPokemons(type) {
    this.setState({
      filteredType: type,
      pokemonIndex: 0,
    }, () => this.filterPokemons())
  }

  filterPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  render() {
    const { pokemonTypes, pokemonIndex } = this.state;
    const filteredPokemons = this.filterPokemons();
    const pokemon = filteredPokemons[pokemonIndex];
      return (
        <div className="pokedex">
          <Pokemon pokemon={ pokemon } />
          <div className="filter-buttons">
            <button className="filter-button" onClick={() => this.onFilterPokemons('all')}>
              All
            </button>
            { pokemonTypes.map((type) => {
              return(
                <button className="filter-button" onClick={() => this.onFilterPokemons(type)} key={Math.random()}>
                  { type }
                </button>
              )
            })}
          </div>
          <button className="pokedex-button" onClick={() => this.nextPokemon(filteredPokemons.length)} disabled={ filteredPokemons.length <= 1 }>
            Próximo Pokemon
          </button>
        </div>
      );
  }
}

export default Pokedex;