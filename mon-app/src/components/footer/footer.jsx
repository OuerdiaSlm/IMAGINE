import React from "react"
import './footer.css';
import instagram from '../../assets/instagram.png';

  function Footer() {
    return (
      <>
      
      <div className="global-div-footer">
        <div className="global-div-informationFooter">
          <h4 className = "information">Notre équipe vous accueillent avec plaisir du lundi au samedi de 09h00 à 19h00 </h4>
          <div className="coordonnes-adresse">
            <div>
              <h3 className="informationTitle" >COORDONNÉES</h3>
              <h4 className = "information">01 80 50 22 90</h4>
            </div>
            <div>
              <h3 className="informationTitle" >ADRESSES</h3>
              <h4 className = "information">105 Rue Caulaincourt 75018 Paris.</h4>
              <h4 className = "information">Métro : Lamark, Jules Joffrin</h4>
              <h4 className = "information">Bus : 80 Lamark-Caulaincourt</h4>
            </div>
            <div>
              <h3 className="informationTitle" >NOUS SUIVRE</h3>
              <div className="instagramText">
                <img onClick={(e) => { e.preventDefault(); window.location='https://www.instagram.com/imaginecafeparis/?hl=fr';}} src={instagram}className="instagram" alt="instagram"/>
                <h4 className = "information"> @imaginecafeparis</h4>
              </div>
              <div className="instagramText">
                <img onClick={(e) => { e.preventDefault(); window.location='https://www.instagram.com/imagine_a_cake/?hl=fr';}} src={instagram}className="instagram" alt="instagram"/>
                <h4 className = "information"> @imagine_a_cake</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="global-div-footer-mentions">
        <h3 className="mention"> © 2022 IMAGINE</h3>
      </div>
      </>
    )
  }
  export default Footer;