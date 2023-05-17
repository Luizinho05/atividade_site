import { Link } from 'react-router-dom'
import banner from '../../fotos/banner2.png'
import './styles.css'

export default function Header(){

    return(
        <div id="fundo">
  <Link className='logo' to='/'><img id="banner" src={banner} alt="banner"></img></Link>
  

<div class='dropdown'>
  <button class='dropbtn'><h2 class='pagina'>Informações</h2></button>
  <div class='dropdown-content'>
  <Link class='textodropdown' to='/informações'>Info</Link>
  </div>
</div>


<div class="dropdown">
  <button class="dropbtn"><h2 class="paginas">Filmes</h2></button>
  <div class="dropdown-content">
  <Link class='textodropdown' to='/Filmes'>Populares</Link>
  <Link class='textodropdown' to='/cartaz'>Em Cartaz</Link>
  <Link class='textodropdown' to='/estreias'>Estreias</Link>
  </div>
</div>


<div class="dropdown">
  <button class="dropbtn"><h2 class="paginas">Favoritos</h2></button>
  <div class="dropdown-content">
  <Link class='textodropdown' to='/Favoritos'>Filmes favoritos</Link>
  <Link class='textodropdown' to='/Favorita'>Séries Favoritas</Link>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn"><h2 class="paginas">Séries</h2></button>
  <div class="dropdown-content">
  <Link class='textodropdown' to='/SerieP'>Populares</Link>
  <Link class='textodropdown' to='/Hojetv'>Hoje na TV</Link>
  <Link class='textodropdown' to='/tv'>Na TV</Link>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn"><h2 class="paginas">Área Cliente</h2></button>
  <div class="dropdown-content">
  <Link class='textodropdown' to='/Cadastro'>Cadastro</Link>
  <Link class='textodropdown' to='/Login'>Login</Link>
  </div>
</div>


</div>
    )
    
}