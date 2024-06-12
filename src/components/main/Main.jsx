import './Main.css';
import man from '../../assets/man.svg';
function Main(){
     return(
          <>
               <main className='main-container'>
                    <img className='main-img' src={man} alt="Logo" />

                    <h1 className='main-title'>CONECTE-SE AO<br/>MUNDO COM<br/> SITES EXCLUSIVOS</h1>

                    <p className='main-paragraph'>"Garantimos que seu site não só seja bonito,<br/> mas também
                    rápido e otimizado para os <br/> motores de busca,
                    ajudando você a <br/> alcançar um público maior."</p>


                    <button className='button-zap'>WHATSAPP</button>
               </main>
          </>
     )
}

export default Main;