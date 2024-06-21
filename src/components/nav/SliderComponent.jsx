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
    { id: 1, text: 'Otimização SEO' },
    { id: 2, text: 'Design Personalizado' },
    { id: 3, text: 'Captação de Leads' },
    { id: 4, text: 'Marketing de Conteúdo' },
    { id: 6, text: 'Desenvolvimento Web' },
    { id: 7, text: 'Publicidade Online' },
    { id: 8, text: 'Email Marketing' },
    { id: 9, text: 'Análise de Dados' },
    { id: 10, text: 'Consultoria Digital' },
  ];

  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
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
  const handleButtonClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="slider-container">
      <p>Quer Saber Mais? Clique Para Mais Informações.</p>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="slide-item">
            <button onClick={() => handleButtonClick(item.text)}>{item.text}</button>
          </div>
        ))}
      </Slider>
      <ModalComponent show={showModal} onClose={handleCloseModal} content={modalContent} />
    </div>
  );
};

export default SliderComponent;