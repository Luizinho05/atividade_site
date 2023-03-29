import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Inicio from './pages/Inicio'
import Filmes from './pages/Filmes'
import Cadastro from './pages/Cadastro'
import Series from './pages/Series'
import Cartaz from './home/cartaz'
import Teste from './home/teste'
import Gelo from './home/gelo'
import Grande from './home/gente-grande'
import Flash from './home/serie1'


export default function Rotas() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={ <Inicio /> } />
                <Route path='/Filmes' element={ <Filmes /> } />
                <Route path='/Cadastro' element={ <Cadastro /> } />
                <Route path='/Series' element={<Series />} />
                <Route path='/Cartaz' element={<Cartaz />} />
                <Route path='/Teste' element={<Teste />} />
                <Route path='./gelo' element={<Gelo />} />
                <Route path='./Grande' element={<Grande />} />
                <Route path='./Flash' element={<Flash />} />
            </Routes>
        </BrowserRouter>
    )
}