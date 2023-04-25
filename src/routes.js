import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Inicio from './pages/Inicio'
import Filmes from './pages/Filmes'
import Cadastro from './pages/Cadastro'
import Series from './pages/Series'
import Cartaz from './home/cartaz'
import Estreias from './home/estreias'
import SerieP from './home/SerieP'
import Hojetv from './home/Hojetv'
import Natv from './home/tv'
import Detalhes from './pages/Detalhes'
import Login from './pages/Login'
import Favoritos from './pages/Favoritos'

export default function Rotas() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={ <Inicio /> } />
                <Route path='/Detalhes/:id' element={ <Detalhes/> } />
                <Route path='/Filmes' element={ <Filmes /> } />
                <Route path='/Favoritos' element={ <Favoritos /> } />
                <Route path='/Cadastro' element={ <Cadastro /> } />
                <Route path='/Login' element={ <Login /> } />
                <Route path='/Series' element={<Series />} />
                <Route path='/cartaz' element={<Cartaz />} />
                <Route path='/estreias' element={<Estreias />} />
                <Route path='/SerieP' element={<SerieP />} />
                <Route path='/Hojetv' element={<Hojetv />} />
                <Route path='/tv' element={<Natv />} />
            </Routes>
        </BrowserRouter>
    )
}