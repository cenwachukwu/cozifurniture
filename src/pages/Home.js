import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Carrousel from '../components/Carrousel/carrousel';
import Pills from '../components/HomePagePills/pills';
import loveseat from '../utils/pillBackground/livingRoom.jpg';
import PillBox from '../components/NavbarButtons/navbarButtons';
import Footer from '../components/Footer/footer';

const Home = (props) => {
  return (
    <div className="Home">
      <Navbar />
      <Carrousel />
      <PillBox />
      <Footer />
    </div>
  );
};

export default Home;
