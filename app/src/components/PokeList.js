import React from 'react';
import { connect } from 'react-redux';
import {getPoke} from '../actions';
import styled from 'styled-components';

const PokeList = props => {
  
  const pullPoke = e => {
    e.preventDefault();
    props.getPoke();
  };

  return (
    <>
    <h1>Poke Puller</h1>
    <div>
      {props.pokemon.map(pokemon => (
        <h3 key={pokemon.url}>{pokemon.name}</h3>
      ))}
    </div>
    {props.error && <p className="error">{props.error}</p>}
    <Button onClick={pullPoke}>Pull Your Mon!</Button>
    </>
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  error: state.error
});

const Button = styled.button`
display:flex;
alignt-content:center;
`


export default connect(mapStateToProps, {getPoke})(PokeList);