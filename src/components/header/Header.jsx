import './Header.css'
import Hamburguer from '../hamburguer/Hamburguer'
function Header(){
     return(
          <>
               <header className='container-header'>
                    <h1 className='logo'>LOGO</h1>
                    
                    <a href='#'className='contato-top'>Contato</a>
                    <Hamburguer/>
               </header>
          </>
     )
}

export default Header;