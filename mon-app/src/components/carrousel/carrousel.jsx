import React, { useState } from "react"
import './carrousel.css';
import logo from '../../assets/logo.png';
import banner from '../../assets/banner.jpg';
import cadre from '../../assets/cadre.jpg';
import data from '../../datas/datas.json';
import amechiche from '../../assets/logo.png';
import { Carousel } from 'react-responsive-carousel';

  function Carrousel (){

    let [bannerWeb,setBanner]=useState(banner)

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

  window.onscroll = ()=>{
    if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
      setBanner(cadre)
    }
    else{
      setBanner(banner)
    }
  }

      return (
            <section className="bannerDiv">      
              <div className="test1">
                  <img src={bannerWeb} className="banner" alt="La forêt de peupliers"/>
              </div>
              <div className="test2">
                  <p className="bannerText">BIENVENU CHEZ IMAGINE</p>
              </div> 
            </section>
      );
    
  }
  export default Carrousel;