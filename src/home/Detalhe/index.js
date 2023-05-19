import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import moment from 'moment'
import './estilo.detalhes.css'

export default function DetalhesSeries() {
    const { id } = useParams()
    const [serie, setSeries] = useState({})

    useEffect(() => {

        async function loadSerieDetail() {

            const response = await api.get(`/tv/${id}`, {
                params: {
                    api_key: "d7467b74ee29835a60176efafc99b899",
                    language: 'pt-BR' 
                   
                }
            })
            setSeries(response.data)
        }
        loadSerieDetail()
    }, [id])
    console.log(serie)

    function Salvar() {
        const minhaLista = localStorage.getItem('@seriesfavoritas')
        let seriesSalvas = JSON.parse(minhaLista) || []
        const verificarSeries = seriesSalvas.some( (serieSalva) => serieSalva.id === serie.id )
        if(verificarSeries){
           alert('Série já  salva')
           return
        }

        seriesSalvas.push(serie)
        localStorage.setItem('@seriesfavoritas', JSON.stringify(seriesSalvas))
        alert('SERIE SALVA COM SUCESSO')
    }

    return (
        <div>
            <h1 class="sobreserie">Sobre a Série:</h1><br/>
            <h1 class="Detalhes">{serie.name}</h1>
            <img src={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`} alt={serie.name} /><br />
            <p class="descriçãoserie"><strong>Descrição:</strong> {serie.overview}<br />
                <strong>Frase do Filme:</strong> {serie.tagline}<br/>
                <strong>Nota:</strong> {Number(serie.vote_average).toFixed(1)}<br />
                <strong>Data de lançamento:</strong>{moment(new Date(`${serie.last_air_date}`)).format('DD-MM-YYYY')}<br />
            </p><br />
            <h1 class="codigo">Série n°{id}</h1>
            <h3 class="outrasSeries">Outras Séries: <Link class="populares" to='/SerieP'>Séries Populares</Link></h3>
            <button class='botaosalvarserie' onClick={Salvar}><p>Salvar Série</p></button>
        </div>
    )
}