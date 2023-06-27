import React, { useState } from 'react';
import ImagePokemon from './ImagePokemon';

const CartePokemon = ({ nom, image, type, habilities, hauteur, largeur }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className={`carte-pokemon ${hovered ? 'Infos-pokemon' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{ height: hauteur, width: largeur }}
    >
      <ImagePokemon src={image} alt={nom} hauteur={hauteur} largeur={largeur} />
      <h2>{nom}</h2>
      {hovered && (
        <div className="habilites">
          <h3>Habilités:</h3>
          <ul>
            {habilities.map((habilite, index) => (
              <li key={index}>{habilite}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartePokemon;
