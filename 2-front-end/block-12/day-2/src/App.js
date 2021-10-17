import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <Switch>
    <Route exact path="/">
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    </Route>
    </Switch>
  );
}

export default App;