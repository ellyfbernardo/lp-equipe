import './Article.css'  
import tenda from '../../assets/tenda.svg';

function Article(){
     return(
          <>
               <div className="article-container">
                    <picture>
                         <img src={tenda} alt="" className='tenda-svg'/>
                    </picture>
                    
                    <div className='text-article'>

                         <h1 className='title-porque'>Por que Landing Page?</h1>
                              <div className='text-container'>
                                   <h1>1</h1>
                                   <h3> "Você está pronto para aumentar suas conversões e 
                                   transformar visitantes em clientes? "</h3>
                              </div>
                                   <p className='p-text'><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid nam quo aliquam ex facere ducimus vitae sed facilis impedit unde tempore, architecto reiciendis id? Ipsum, a. Exercitationem, dicta neque.</p>

                              <div className='text-container'>    
                                   <h1>2</h1>
                                   <h3>"Será que seu site está capturando todo o potencial 
                                   de seus visitantes?"</h3>
                              </div>
                                   <p className='p-text'><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus deleniti, assumenda minima ipsum pariatur, veritatis, voluptate facere dolorem ipsam quo ratione rerum! Quos eius consectetur id consequuntur sunt quidem reiciendis?</p>
                    </div>
                    <p className='p-footer-article'>“ Não perca mais oportunidades! Solicite uma consulta gratuita hoje e descubra como podemos transformar suas visitas em resultados concretos. “</p>
               </div>
          
          </>
     )
}

export default Article;