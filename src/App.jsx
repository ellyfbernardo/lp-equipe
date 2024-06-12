import Header from './components/header/Header';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import './app.css'
import whatsapp from './assets/whatsapp.svg'
function App() {
 

  return (
    <>
      <Header/>
      <Main/>
      <Nav/>
      <img className='zap-svg' src={whatsapp} alt="zap"/>
    </>
  )
}

export default App
