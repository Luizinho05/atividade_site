import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import './series.css'
 
  function SerieP(){

    const [serie, setSeries] = useState([''])

    useEffect(() => {
    
    async function loadseries() {
    const response = await api.get("/tv/top_rated", {
    params: {
    api_key: "d7467b74ee29835a60176efafc99b899",
    language: "pt-BR",
    page: 1,

    }
    })
    setSeries(response.data.results)
    }
    loadseries()
     }, [serie])

    console.log(serie)

    return(
        <div className="siteSeries">
            
            {serie.map((series) => {
                return(
                    
                    <article key={series.id}>
                        <h1>{series.name}</h1><br/>
                        <img src={`https://image.tmdb.org/t/p/w300/${series.poster_path}`} alt={series.name} /><br />
                        <Link class="Link" to={`/Detalhe/${series.id}`}>Detalhes</Link>
                    </article>
                 
                )
            })}
        </div>
    )
}

export default SerieP;