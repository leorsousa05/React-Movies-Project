import React from "react"

import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Link } from "react-router-dom"

import './home.css'

// URL da API: discover/movie?api_key=e1bedd00c0d97b2bfcfe90877421d90e&language=pt-BR 

export default function Home() {

    const [movies, setMovies] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get("/discover/movie", {
                params: {
                    api_key: "e1bedd00c0d97b2bfcfe90877421d90e",
                    language: 'pt-BR',
                    page: 1,
                }
            })

            setMovies(response.data.results.slice(0,10))
            setLoading(false)
        }

        loadMovies()

    }, [])

    if(loading) {
        return (
            <div className="loading">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="movie-list">
                {movies?.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                            <Link to={`/movie/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>

    )
}
