import Header from './components/header/Header';
import Main from './components/main/Main';
import SliderComponent from './components/nav/SliderComponent';
import './app.css'
import whatsapp from './assets/whatsapp.svg'
function App() {
 

  return (
    <>
      <Header/>
      <Main/>
      <SliderComponent/>
      <img className='zap-svg' src={whatsapp} alt="zap"/>
    </>
  )
}

export default App
