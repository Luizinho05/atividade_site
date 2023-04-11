import { useEffect, useState } from 'react'

import api from '../../services/api'

export default function Cartaz(){

    const [ filmes, setFilmes ] = useState([''])

    useEffect(() => {
        async function loadFilmes() {

            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: "d7467b74ee29835a60176efafc99b899",
                    language: 'pt-BR'
                }
            })

            setFilmes(response.data.results)
        }
        loadFilmes()
        console.log(filmes)
    }, [filmes])

    console.log(filmes)

    return(
        <div>
           <h1> Em Cartaz</h1>
            {filmes.map((filme) => {
                return(
                    <article>
                        <p>{filme.title}</p>
                        <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} 
                        alt={filme.title} />
                    </article>
                )
            })}
        </div>
    )
}