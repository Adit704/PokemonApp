import React from "react";

export const PokemonViewer = ({pokemon, onPrev, onNext}) =>{
    return (
        <div> 
            <div  className="pokemonBox">
            
            <img className="imageClass" src={pokemon.image} alt={pokemon.name} />
            <h1>{pokemon.name}</h1>
            <p>{pokemon.description}</p>
            </div>
           
            <button onClick={onPrev}>Prev</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}