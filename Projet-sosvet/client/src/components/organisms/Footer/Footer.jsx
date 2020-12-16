import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('./_footer.scss');


class Footer extends Component {
  render() {
    return (
      <footer>
        <section id="section_grid">
          <a href="https://www.vet-alfort.fr/" target="imagen">
            <div id="boite-1"> </div>
          </a>
          <a href="https://www.vetoadom.com/veterinaire-de-garde-75.php" target="imagen">
            <div id="boite-2"></div>
          </a>
          <a href="https://www.urgences-veterinaires.fr/" target="imagen">
            <div id="boite-3"></div>
          </a>
          <a href="https://www.vetalia.com/" target="imagen">
            <div id="boite-4"></div>
          </a>
          <a href="https://www.doctissimo.fr/animaux/conseil-veterinaire/urgences-veterinaire-animaux" target="imagen">
            <div id="boite-5"></div>
          </a>
          <div id="boite-6">
            <h6>Pour toute question d'ordre médicale, merci de contacter notre vétérinaire de garde au 01 47 46 09 09.</h6>
            <p>© 2020 SOSVET, Inc. Tous les droits sont réservés
              <Link className="text-center" to="/CGU" target="link"> Conditions Générales d'Utilisation.</Link>
            </p>
          </div>
        </section>
      </footer>
    )
  }
}
export default Footer;


