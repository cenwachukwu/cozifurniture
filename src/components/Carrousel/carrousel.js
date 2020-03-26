import React from 'react';
import './carrousel.scss';
import tempPics from '../../utils/pics.jpg';

const Carrousel = () => {
  return (
    <div className="tempCarrouselPic">
      <a href="#">
        <img title="tempImg" alt="Cozi Sofa" src={tempPics} />
      </a>
    </div>
  );
};

export default Carrousel;
