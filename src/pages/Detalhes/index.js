import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './estilo.detalhes.css'
import moment from 'moment'

export default function Detalhes() {
    const { id } = useParams()
    const [filme, setFilme] = useState({})

    useEffect(() => {

        async function loadFilmeDetail() {

            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: "d7467b74ee29835a60176efafc99b899",
                    language: 'pt-BR'
                }
            })
            setFilme(response.data)
        }
        loadFilmeDetail()
    }, [id])
    console.log(filme)

    function Salvar() {
        const minhaLista = localStorage.getItem('@filmesfavoritos')
        let filmesSalvos = JSON.parse(minhaLista) || []
        const verificarFilmes = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id )
        if(verificarFilmes){
           alert('Filme já está salvo')
           return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('@filmesfavoritos', JSON.stringify(filmesSalvos))
        alert('FILME SALVO COM SUCESSO')
    }

    return (
        <div>
            <h1 class="sobrefilme">Sobre o Filme:</h1>
            <h1 class="Detalhes">{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.title} /><br />
            <p class="descriçãofilme"><strong>Descrição:</strong> {filme.overview}<br />
                <strong>Frase do Filme:</strong> {filme.tagline}<br />
                <strong>Nota:</strong> {Number(filme.vote_average).toFixed(1)}<br />
                <strong>Data de lançamento:</strong>{moment(new Date(`${filme.release_date}`)).format('DD-MM-YYYY')}<br />
            </p><br />
            <h1 class="codigo"> Filme n° {id}</h1>
            <h3 class="Detalhes">Outros Filmes: <Link class="cartaz" to='/cartaz'>Em Cartaz</Link></h3>
            <button onClick={Salvar}>Salvar Filme</button>
        </div>
    )
}