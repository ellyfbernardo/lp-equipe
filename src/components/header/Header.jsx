import './Header.css'
import Hamburguer from '../hamburguer/Hamburguer'
function Header(){
     return(
          <>
               <header className='container-header'>
                    <h1 className='logo'>LOGO</h1>
                    
                    <a href='https://api.whatsapp.com/send/?phone=5561995980384&text&type=phone_number&app_absent=0'className='contato-top'>Contato</a>
                    <Hamburguer/>
               </header>
          </>
     )
}

export default Header;