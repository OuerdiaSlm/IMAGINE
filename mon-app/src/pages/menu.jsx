import menuImagine from '../assets/menuImagine.png';

import './style.css';

function Menu () {
  return(
    <section className="globalSectionMenu">
      <img src={menuImagine}className="menuCardImage" alt="menuCardImage"/>
    </section>

  )
}

export default Menu