import { Link } from 'react-router-dom'
import banner from '../../fotos/banner2.png'
import './styles.css'

export default function Header(){

    return(
        <div id="fundo">
  <Link className='logo' to='/'><img id="banner" src={banner} alt="banner"></img></Link>
  
  <Link to='/informações'><h2 class="pagina">Info</h2></Link>

<div class="dropdown">
  <button class="dropbtn"><h2 class="paginas">Filmes</h2></button>
  <div class="dropdown-content">
  <Link to='/Filmes'>Populares</Link>
  <Link to='/cartaz'>Em Cartaz</Link>
  <Link to='/estreias'>Estreias</Link>
  </div>
</div>


<div class="dropdown">
  <button class="dropbtn"><h2 class="paginas">Favoritos</h2></button>
  <div class="dropdown-content">
  <Link to='/Favoritos'>Filmes favoritos</Link>
  <Link to='/Favorita'>Séries Favoritas</Link>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn"><h2 class="paginas">Séries</h2></button>
  <div class="dropdown-content">
  <Link to='/SerieP'>Populares</Link>
  <Link to='/Hojetv'>Hoje na TV</Link>
  <Link to='/tv'>Na TV</Link>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn"><h2 class="paginas">Contato</h2></button>
  <div class="dropdown-content">
  <Link to='/Cadastro'>Cadastro</Link>
  <Link to='/Login'>Login</Link>
  </div>
</div>


</div>
    )
    
}