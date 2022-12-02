import avocadotoast from '../assets/Imagineacake_avocadotoast.jpg';
import pastadizucchini from '../assets/Imagineacake_pastadizucchini.jpg';
import tetedechou from '../assets/Imagineacake_tetedechou.jpg';
import pistacheisland from '../assets/Imagineacake_pistacheisland.jpg';
import snickersbar from '../assets/Imagineacake_snickersbar.jpg';
import bananabread from '../assets/Imagineacake_bananabread.jpg';
import carrotcake from '../assets/Imagineacake_carrotcake.jpg';
import cacaoisland from '../assets/Imagineacake_cacaoisland.jpg';
import chocolatetruffle from '../assets/Imagineacake_Chocolatetruffle.jpg';
import vracoignons from '../assets/Imagineacake_vracoignons.jpg';
import vracpoires from '../assets/Imagineacake_vracpoires.jpg';
import vractomatesechees from '../assets/Imagineacake_vractomatesechees.jpg';

import './style.css';

function Gallery () {
  return(
    <section className="globalSectionGallery">
      <p>Gallerie</p>
      <div className="menuPictures">
        <img src={avocadotoast}className="foodPictures" alt="deliveroo"/>
        <img src={pastadizucchini}className="foodPictures" alt="deliveroo"/>
        <img src={tetedechou}className="foodPictures" alt="deliveroo"/>
      </div>
      <div className="dissertPictures">
        <img src={pistacheisland}className="foodPictures" alt="deliveroo"/>
        <img src={snickersbar}className="foodPictures" alt="deliveroo"/>
        <img src={bananabread}className="foodPictures" alt="deliveroo"/>
      </div>
      <div className="dissertPictures">
        <img src={carrotcake}className="foodPictures" alt="deliveroo"/>
        <img src={cacaoisland}className="foodPictures" alt="deliveroo"/>
        <img src={chocolatetruffle}className="foodPictures" alt="deliveroo"/>
      </div>
      <div className="dissertPictures">
        <img src={vracoignons}className="foodPictures" alt="deliveroo"/>
        <img src={vracpoires}className="foodPictures" alt="deliveroo"/>
        <img src={vractomatesechees}className="foodPictures" alt="deliveroo"/>
      </div>
    </section>
  )
}

export default Gallery;