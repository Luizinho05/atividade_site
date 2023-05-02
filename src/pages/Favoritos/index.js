import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './estilo.favoritos.css'

export default function Favoritos(){

     const [ filmes, setFilmes ] = useState([])
     useEffect(() => {
        const minhaLista = localStorage.getItem('@filmesfavoritos')
        setFilmes(JSON.parse(minhaLista) || [])
     }, [])
     console.log(filmes)

     function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes);
        localStorage.setItem('@filmesfavoritos', JSON.stringify(filtroFilmes))
    }
    

    return(
        <div><br/>
            <strong id="temasiniciais">Página de Filmes Favoritos</strong>
            
            {filmes.map((filme) => {
                return(
                    
                    <article class="article" key={filme.id}>
                        <h1>{filme.title}</h1><br/>
                        <br/><br/><br/>
                        <Link class="ClicaAi" to={`/Detalhes/${filme.id}`}>Detalhes</Link>
                        <button class="enviar" onClick={() => excluirFilme (filme.id) }>Excluir</button>
                    </article>
                )
            })}
            <div>
            </div>
        </div>
    )
}