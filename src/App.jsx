import SliderComponent from './components/nav/SliderComponent';
import Header from './components/header/Header';
import whatsapp from './assets/whatsapp.svg'
import Main from './components/main/Main';
import Article from './components/article/Article';
import './app.css'
import Section from './components/section/Section';
function App() {

  return (
    <>
      <Header/>
      <Main/>
      <SliderComponent/>
      <Article/>
      <Section/>

      {/* <img className='zap-svg' src={whatsapp} alt="zap"/> */}
    </>
  )
}

export default App
