import { Link } from 'react-router-dom'
import './styles.css'

export default function Header(){

    return(
        <div id="fundo">
           <div class="dropdown">
  <button class="dropbtn">Início</button>
  <div class="dropdown-content">
  <Link to='/'>Introdução</Link>
  <Link to='/Cartaz'>Cartaz</Link>
  <Link to='/Teste'>teste</Link>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Filmes</button>
  <div class="dropdown-content">
  <Link to='/Filmes'>Introdução</Link>
  <Link to='/Gelo'>Era do gelo</Link>
  <Link to='/Grande'>Gente Grande</Link>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Séries</button>
  <div class="dropdown-content">
  <Link to='/serie1'>Flash</Link>
  <Link to='/'>teste</Link>
  <Link to='/'>teste</Link>
  </div>
</div>
           
           <Link to='/Cadastro'><h2>Cadastro</h2></Link>
    </div>
    )
    
}