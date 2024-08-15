import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';
import ModalComponent from '../modal/ModalComponent'

const SliderComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const items = [
    { id: 1, text: 'Otimização SEO', description: 'A Otimização SEO ajuda a melhorar o ranking do seu site nos motores de busca, atraindo mais visitantes.' },
    { id: 2, text: 'Design Personalizado', description: 'Design exclusivo criado sob medida, refletindo a identidade única e as necessidades do cliente.'},
    { id: 3, text: 'Captação de Leads', description:'Atraia e conquiste clientes potenciais com estratégias eficazes de captação de leads!' },
    { id: 4, text: 'Marketing de Conteúdo', description:'Conquiste seu público com conteúdo relevante e envolvente que impulsiona sua marca!' },
    { id: 6, text: 'Desenvolvimento Web', description:'Tenha um site incrível e funcional que se destaca online com nosso desenvolvimento web especializado!' },
    { id: 7, text: 'Publicidade Online', description:'Amplie seu alcance e gere resultados com campanhas de publicidade online impactantes e direcionadas!' },
    { id: 8, text: 'Email Marketing', description:'Conquiste clientes com campanhas de email marketing personalizadas e envolventes!' },
    { id: 9, text: 'Análise de Dados', description:'Transforme dados em insights poderosos para decisões estratégicas com nossa análise de dados avançada!' },
    { id: 10, text: 'Consultoria Digital', description:'Maximize seu potencial online com nossa consultoria digital especializada e estratégica!' },
  ];

  const settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <div className="arrow next"></div>,
  prevArrow: <div className="arrow prev"></div>,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};
  const handleButtonClick = (description) => {
    setModalContent(description);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
     <div className='container'>
    <div className="slider-container">
      <p>Quer Saber Mais? Clique Para Mais Informações.</p>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="slide-item">
            <button onClick={() => handleButtonClick(item.description)}>{item.text}</button>
          </div>
        ))}
      </Slider>
      <ModalComponent show={showModal} onClose={handleCloseModal} content={modalContent} />
    </div>
    </div>
  );
};

export default SliderComponent;