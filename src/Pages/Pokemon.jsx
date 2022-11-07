import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRessource } from "../Services/pokemonService";
import PokemonCardDetail from '../Components/PokemonCardDetail'
import Loading from '../Components/Loading'

export default function Pokemon() {

    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState({});
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    
    useEffect(() => {
        getRessource(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => {
            setPokemon(data);
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            setErr(err)
        })
    }, [id]);

    if (loading) {
        return <Loading />
    }

    if (err !== null) {
        return <div>something wrong happened</div>
    }

    return (
        <PokemonCardDetail pokemon={pokemon} />
    );
}