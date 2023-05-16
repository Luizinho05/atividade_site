import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './favoritoS.css'

export default function SeriesFavoritas(){

     const [ series, setSeries ] = useState([])
     useEffect(() => {
        const minhaLista = localStorage.getItem('@seriesfavoritas')
        setSeries(JSON.parse(minhaLista) || [])
     }, [])
     console.log(series)

     function excluirSerie(id) {
        let filtroSeries = series.filter((item) => {
            return (item.id !== id)
        })
        setSeries(filtroSeries);
        localStorage.setItem('@seriesfavoritas', JSON.stringify(filtroSeries))
    }
    

    return(
        <div><br/>
            <strong id="temasiniciais">Página de Séries Favoritas</strong>
            {series.map((serie) => {
                return(
                    
                    <article class="tudo" key={serie.id}>
                        <h1>{serie.name}</h1><br/>
                        <br/><br/><br/>
                        <Link class="Clique" to={`/Detalhe/${serie.id}`}>Detalhes</Link>
                        <button class="excluirSerie" onClick={() => excluirSerie (serie.id) }>Excluir</button>
                    </article>
                )
            })}
           <div>
            </div>
        </div>
    )
}