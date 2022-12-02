import React, { useState } from "react"
import './carrousel.css';
import banner from '../../assets/banner.jpg';
import data from '../../datas/datas.json';
import amechiche from '../../assets/logo.png';
import { Carousel } from 'react-responsive-carousel';

  function Carrousel (){

    let slide=['../../assets/logo.png', "../../assets/plante.png", "../../assets/entree.png"]

    let imageSlide;

    let numero=0
    function ChangeSlide(sens) {
      numero = numero + sens;

      if (numero < 0){
        numero=slide.length - 1
          
        }
      if (numero > slide.length - 1){
        numero=0
        }
        imageSlide=slide[numero]
        console.log(imageSlide)
  }

      return (
            <section className="bannerDiv">      
              <div className="test1">
                  <img src={banner} className="banner" alt="La forêt de peupliers"/>
              </div>
              <div className="test2">
                  <p className="bannerText">BIENVENU CHEZ IMAGINE !</p>
              </div> 
            </section>
      );
    
  }
  export default Carrousel;