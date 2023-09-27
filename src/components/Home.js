import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <section id='intro'>
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Dishank</span><br/>FrontEnd Developer</span>
        </div>
        <img src="./image.png" alt="Profile" className="bg" />
      </section>
    </>
  )
} 

export default Home;