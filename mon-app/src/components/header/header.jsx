import React from "react"
import logo from '../../assets/logo.png';
import './header.css';
import {Link} from "react-router-dom"

  function Header() {
    return (
      <div className="global-div-header">
        <header className="">
          <div className="Barre-navigation">
            <img src={logo} className="logo" alt="" />
            <ul className="Barre-text">   
              <Link className="headerNav-li" to ="/"><li>Accueil</li></Link>
              <Link className="headerNav-li" to ="/gallery"><li>Gallerie</li></Link>
              <Link className="headerNav-li" to ="/menu"><li>Carte</li></Link>
              <Link className="headerNav-li" to ="/about"><li>A propos</li></Link>
              
            </ul>
          </div>
        </header>
      </div>
    )
  }
  export default Header;