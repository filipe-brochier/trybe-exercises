import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <Switch>
    <Route exact path="/">
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    </Route>
    <Route path="/pokemons/:id" component={PokemonDetails} />
    </Switch>
  );
}

export default App;