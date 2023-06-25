import React from 'react';

const ImagePokemon = ({ src, alt, hauteur, largeur }) => {
  return <img src={src} alt={alt} style={{ height: hauteur, width: largeur }} />;
};

export default ImagePokemon;
