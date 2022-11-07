import './style.scss'
import { Link } from "react-router-dom";
import { lazy } from 'react';

export default function PokemonCard({ pokemon }) {

    const id = pokemon.url.split('/').reverse()[1]

    return (
        <article className="pokemon-card">
            <Link to={`pokemon/${id}`}>
                <picture className='pokemon-img'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`pokemon-${id}`} loading="lazy" />
                </picture>
                <h3 className='pokemon-title'>{pokemon.name}</h3>
            </Link>
        </article>
    );
}