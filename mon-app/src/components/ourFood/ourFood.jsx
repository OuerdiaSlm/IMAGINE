import React from "react"
import { Link } from "react-router-dom";
import blueCake from '../../assets/blueCake.png';
import box from '../../assets/box.png';
import deliveroo from '../../assets/deliveroo.png';
import ubereats from '../../assets/ubereats.png';
import Gallery from "../../pages/gallery";

import './ourFood.css';

  function OurFood() {
    return (
      <section className="global-ourFood">
        <div className="global-div-ourFood">
            <div className="ourFood-image">
              <img src={blueCake} className="blueCake" alt="" />
            </div>
            <div className="ourFood-text">
              <h3>VENEZ DECOUVRIR NOS PLATS</h3>
              <p>Jusqu’à présent, plus de 4000 composés phytochimiques ont été détectés dans les plantes. Venez dnc découvrr nos plats composés de fruts et légumes certifiés biologique</p>
              <Link to = "/Gallery">
              <button className="button-to-gallery">Je découvre</button>
              </Link>
            </div>
        </div>
        <div className="global-div-ourFood">
          <div className="ourFood-text">
            <h3>RESTEZ CHEZ VOUS, ON S’OCCUPE DE TOUT</h3>
            <p>Déguster de bons repas ultra frais sans vous déplacer. commandez vite en livraison sur :</p>
            <img onClick={(e) => { e.preventDefault(); window.location='https://deliveroo.fr/fr/menu/paris/18eme-jules-joffrin/imagine-a-cake/?day=today&geohash=u09wjhp78791&time=ASAP';}} src={deliveroo}className="deliveroo" alt="deliveroo"/>
          </div>
          <div className="ourFood-image">
            <img src={box} className="box" alt="box" />
          </div>
        </div>
      </section>
    )
  }
  export default OurFood;