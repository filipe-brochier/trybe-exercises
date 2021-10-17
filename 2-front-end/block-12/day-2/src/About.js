import React from 'react';
import './pokemon.css';

class About extends React.Component {
  render() { 
    return (
      <div className="pokemon">
        <h1>Pokédex</h1>
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.rankedboost.com%2Fwp-content%2Fuploads%2F2016%2F07%2FPokemon-Go-Pok%25C3%25A9dex.png&imgrefurl=https%3A%2F%2Frankedboost.com%2Fpokemon-go%2Fpokedex%2F&tbnid=eEbbSFItQCWwBM&vet=12ahUKEwi8jem5wdLzAhXzM7kGHfFdCo4QMygAegUIARC1AQ..i&docid=QPwB0fjaM6GLVM&w=684&h=523&q=pokedex%20image&client=firefox-b-d&ved=2ahUKEwi8jem5wdLzAhXzM7kGHfFdCo4QMygAegUIARC1AQ" alt="pokedex" />
        <p>
          The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia) is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to a particular region, while the National Pokédex records information about all known Pokémon. 
        </p>
      </div>
    );
  }
}
 
export default About;