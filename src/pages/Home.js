import React from 'react';
import Navbar from '../components/Navbar/navbar';
import tempPics from '../utils/pics.jpg';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div>
        <a href="#">
          <img title="tempImg" alt="Cozi Sofa" src={tempPics} />
        </a>
      </div>
    </div>
  );
};

export default Home;
