import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About'

function App() {
  return (
    <Switch>
    <Route exact path="/">
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    </Route>
    <Route path="/pokemons/:id" component={ PokemonDetails } />
    <Route path="/about" component={ About } />
    </Switch>
  );
}

export default App;