import React from "react";

import "./GroupeRock.css";

import metallica from "../../data/mettalica";

import Titre_image_description from "./GroupeRockDetail/Titre_image_description"; 
import Detail_expansion_panel from "./Composant_Independant/ExpansionPanel";

const GroupeRock = () => {
  /*let listeDesMembres = metallica.members.map((m, index) => (
    <MembreGroupeRock membre={m} key={index} />
  ));*/

  let Groupe_Titre_image_description = (
    <Titre_image_description data={metallica} />
  );

  let Detail_expansion_panel_fiche_membres_albums = (
    <Detail_expansion_panel data={metallica} />
  );

  return (
    <React.Fragment>
      {Groupe_Titre_image_description}
      {Detail_expansion_panel_fiche_membres_albums}
    </React.Fragment>
  );
};

export default GroupeRock;
