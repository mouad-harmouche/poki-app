import { useState } from "react";
import { useEffect } from "react";
import { getRessource } from "../Services/pokemonService";
import PokemonCard from "../Components/PokemonCard";
import Pagination from "../Components/Pagination";
import Loading from '../Components/Loading'

export default function Home() {

    const [pokemons, setPokemons] = useState([]);
    const [paginationUrl, setPaginationUrl] = useState({
        nextUrl: "https://pokeapi.co/api/v2/pokemon", 
        prevUrl: null
    });
    const [loading, setLoading] = useState(true)
    const [empty, setEmpty] = useState(false)
    const [page, setPage] = useState(paginationUrl.nextUrl)

    function paginate (direction) {
        if ( direction === "prev" && paginationUrl.prevUrl != null ) {
            setPage(paginationUrl.prevUrl)
        } else if ( direction === "next" && paginationUrl.nextUrl != null ) {
            setPage(paginationUrl.nextUrl)
        }
    }

    useEffect(() => {
        getRessource(page).then((data) => {
            if (data.results.length) {
                let paginationUrl = {
                    nextUrl: data.next, 
                    prevUrl: data.previous
                }
    
                setPokemons(data.results);
                setPaginationUrl({...paginationUrl})
                setLoading(false)
            } else {
                setEmpty(true)
            }
        }).catch(err => {
            alert(err)
        })
    }, [page])


    if (loading) {
        return <Loading />
    }

    if (empty) {
        return <h1>No result found</h1>
    }

    return (
        <div className="wrapper">
            <section className="pokemon-list">
                {pokemons.map((pokemon, i) => (
                    <PokemonCard key={i} pokemon={pokemon} />
                ))}

                <Pagination paginate={paginate} activeUrl={paginationUrl} />
            </section>
        </div>
    );
}