import React from "react"
import { useParams } from "react-router-dom"

import { api } from "../../services/api";

export default function Movies() {
    const { id } = useParams();
    const [movie, setMovie] = React.useState()
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        async function loadMovie() {
            api.get(`/movie/${id}`, {
                params: {
                    api_key: 'e1bedd00c0d97b2bfcfe90877421d90e',
                    language: "pt-BR",
                }
            })
                .then(response => {
                    setMovie(response.data)
                    setLoading(!loading)
                })
                .catch(() => {
                    console.log("Filme não foi encontrado")
                })
        }

        loadMovie()
    })

    if(loading) {
        return (
            <div className="movie-details">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className="movie-details">
            <img src="" alt=""/>
        </div>
    );
}
