import '../styles/hero.scss';
import Title from './commons/title.js';
import cv from '../assets/cv/cv.pdf';
import { useState, useEffect } from 'react';
import { BsChevronDoubleDown } from "react-icons/bs";

function Hero() {
  
  return (
    <section id='hero-section' className="hero">
      <div className='hero-container'>
        <Title
        text={"Hi, my name is"} 
        font={'Fira Code'}
        color={"rgb(0,255,0)"}
        size= {"20px"}
        />

        <h2 className='hero-subtitle'>Carlos Cabrera.</h2>
        <h3 className='hero-description'>Javascript Web developer</h3>
        <div className='hero-text-container'>
          <p className='hero-text'>
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
          <span style={{ display: 'inline-block' }}>
            <a href={cv} download>
              <button className='cv-button'>download cv</button>
            </a>
          </span>
          </p>
        </div>
      </div>
      <div className='call-to-action'>
        <a href='#terminal' className='btn'>Try the Console</a>
        <a href="#terminal"><BsChevronDoubleDown /></a>
      </div>
    </section>
  )
}

export default Hero;