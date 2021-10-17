import React from 'react';
import { Link } from 'react-router-dom';
import pokemons from './data';

class PokemonDetails extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const { name, type, averageWeight, image, summary, foundAt } = pokemons.find(pokemon => pokemon.id === Number(id)); 
    return ( 
      <>
        <div style={ { textAlign: "center"} }>
          <Link to="/">
            Voltar ao início
          </Link>
        </div>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
        <img src={image} alt={`${name} sprite`} />
        </div>
        <div style={ { textAlign: "center"} }>
          { summary }
        </div>
        <div className="pokemon">
          { foundAt.map(place => {
              return (
                <div>
                  <div>{ place.location }</div>
                  <img src={ place.map } alt="pokemon map" />
                </div>
              )
          })}
        </div>
      </>
    );
  }
}
 
export default PokemonDetails;
