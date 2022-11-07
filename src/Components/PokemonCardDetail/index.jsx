import './style.scss'

export default function PokemonCardDetail({pokemon}) {
    return (
        <section className="pokemon-card-detail">
            <header>
                <h3>name : {pokemon.name}</h3>
                <p>id : {pokemon.id}</p>
                <p>height : {pokemon.height}</p>
                <p>weight : {pokemon.weight}</p>
                <p>base_experience : {pokemon.base_experience}</p>
            </header>
        </section>
    )
}